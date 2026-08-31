import Student from "../models/Student.js";
import bcrypt from "bcryptjs";


// =====================================================
// Student Registration
// =====================================================
export const registerStudent = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      rollNo,
      className,
      section,
      gender,
      dateOfBirth,
      address,
      parentName,
      parentPhone,
    } = req.body;

    // Required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    // Check existing student
    const existingStudent = await Student.findOne({
      email: email.toLowerCase(),
    });

    if (existingStudent) {
      return res.status(409).json({
        success: false,
        message: "Student with this email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create student
    const student = await Student.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      phone,
      rollNo,
      className,
      section,
      gender,
      dateOfBirth,
      address,
      parentName,
      parentPhone,
    });

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      data: {
        id: student._id,
        name: student.name,
        email: student.email,
      },
    });

  } catch (error) {
    console.error("STUDENT REGISTER ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================================================
// Create Student - Admin
// =====================================================
export const createStudent = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      rollNo,
      className,
      section,
      gender,
      dateOfBirth,
      address,
      parentName,
      parentPhone,
    } = req.body;

    // Check duplicate email
    if (email) {
      const existingStudent = await Student.findOne({
        email: email.toLowerCase(),
      });

      if (existingStudent) {
        return res.status(409).json({
          success: false,
          message: "Student with this email already exists",
        });
      }
    }

    // Default password
    const finalPassword = password || "student123";

    // Hash password
    const hashedPassword = await bcrypt.hash(finalPassword, 10);

    const student = await Student.create({
      name,
      email: email?.toLowerCase(),
      password: hashedPassword,
      phone,
      rollNo,
      className,
      section,
      gender,
      dateOfBirth,
      address,
      parentName,
      parentPhone,
    });

    res.status(201).json({
      success: true,
      message: "Student added successfully",
      data: student,
    });

  } catch (error) {
    console.error("CREATE STUDENT ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================================================
// Get All Students
// =====================================================
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================================================
// Get Single Student
// =====================================================
export const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .select("-password");

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      data: student,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================================================
// Update Student
// =====================================================
export const updateStudent = async (req, res) => {
  try {
    const updateData = { ...req.body };

    // If password is being changed, hash it
    if (updateData.password) {
      updateData.password = await bcrypt.hash(
        updateData.password,
        10
      );
    }

    if (updateData.email) {
      updateData.email = updateData.email.toLowerCase();
    }

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: student,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================================================
// Delete Student
// =====================================================
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};