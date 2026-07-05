import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
import bcrypt from "bcryptjs";

// ==============================
// Create Teacher
// ==============================

export const createTeacher = async (req, res) => {
  try {
    const {
      fullName,
      employeeId,
      gender,
      qualification,
      subject,
      className,
      section,
      experience,
      mobile,
      email,
      joiningDate,
      salary,
      address,
      password,
    } = req.body;

    // Check Existing Email
    const existingTeacher = await Teacher.findOne({
      email,
    });

    if (existingTeacher) {
      return res.status(400).json({
        success: false,
        message: "Teacher with this email already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

   

    // Create Teacher
    const teacher = await Teacher.create({
      fullName,
      employeeId,
      gender,
      qualification,
      subject,
      className,
      section,
      experience,
      mobile,
      email,
      joiningDate,
      salary,
      address,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Teacher added successfully",
      data: teacher,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get All Teachers
// ==============================

export const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: teachers.length,
      data: teachers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get Single Teacher
// ==============================

export const getTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(
      req.params.id
    );

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Update Teacher
// ==============================

export const updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Teacher updated successfully",
      data: teacher,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Delete Teacher
// ==============================

export const deleteTeacher = async (req, res) => {
  try {
    const teacher =
      await Teacher.findByIdAndDelete(
        req.params.id
      );

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Teacher deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTeacherStudents = async (req, res) => {
  try {
    const teacher = req.teacher;

    const students = await Student.find({
      className: teacher.className,
      section: teacher.section,
    }).sort({
      rollNumber: 1,
    });

    res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};