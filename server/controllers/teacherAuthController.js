import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// =====================================================
// TEACHER REGISTER
// =====================================================

export const registerTeacher = async (req, res) => {
  try {
    const {
      name,
      fullName,
      email,
      phone,
      mobile,
      employeeId,
      subject,
      password,
      gender,
      qualification,
      className,
      section,
      experience,
      joiningDate,
      salary,
      address,
    } = req.body;

    // Support both name and fullName
    const teacherName = name || fullName;

    // Support both phone and mobile
    const teacherPhone = phone || mobile;

    // Required fields
    if (
      !teacherName ||
      !email ||
      !teacherPhone ||
      !employeeId ||
      !subject ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email, phone, employee ID, subject and password are required",
      });
    }

    // Check existing email
    const existingEmail = await Teacher.findOne({
      email: email.toLowerCase(),
    });

    if (existingEmail) {
      return res.status(409).json({
        success: false,
        message: "Teacher with this email already exists",
      });
    }

    // Check existing employee ID
    const existingEmployeeId = await Teacher.findOne({
      employeeId,
    });

    if (existingEmployeeId) {
      return res.status(409).json({
        success: false,
        message: "Employee ID already registered",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // Create teacher
    const teacherData = {
      email: email.toLowerCase(),
      employeeId,
      subject,
      password: hashedPassword,
    };

    // Set both name and fullName, phone and mobile
    teacherData.name = teacherName;
    teacherData.fullName = teacherName;
    teacherData.phone = teacherPhone;
    teacherData.mobile = teacherPhone;


    if (gender) teacherData.gender = gender;
    if (qualification)
      teacherData.qualification = qualification;
    if (className) teacherData.className = className;
    if (section) teacherData.section = section;
    if (experience)
      teacherData.experience = experience;
    if (joiningDate)
      teacherData.joiningDate = joiningDate;
    if (salary) teacherData.salary = salary;
    if (address) teacherData.address = address;

    // Only add role if your model supports it
    teacherData.role = "teacher";

    const teacher = await Teacher.create(
      teacherData
    );

    res.status(201).json({
      success: true,
      message: "Teacher registered successfully",

      teacher: {
        id: teacher._id,
        name: teacher.fullName,
        email: teacher.email,
        employeeId: teacher.employeeId,
        subject: teacher.subject,
        role: "teacher",
      },
    });
  } catch (error) {
    console.error(
      "TEACHER REGISTER ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================================================
// TEACHER LOGIN
// =====================================================

export const loginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Email and password are required",
      });
    }

    const teacher = await Teacher.findOne({
      email: email.toLowerCase(),
    });

    if (!teacher) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      teacher.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        success: false,
        message:
          "JWT_SECRET is missing in server environment",
      });
    }

    const token = jwt.sign(
      {
        id: teacher._id,
        role: "teacher",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,

      teacher: {
        id: teacher._id,
        name:
          teacher.fullName || teacher.name,
        email: teacher.email,
        employeeId: teacher.employeeId,
        subject: teacher.subject,
        className: teacher.className,
        section: teacher.section,
        role: "teacher",
      },
    });
  } catch (error) {
    console.error(
      "TEACHER LOGIN ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================================================
// GET TEACHER PROFILE
// =====================================================

export const getTeacherProfile = async (
  req,
  res
) => {
  try {
    if (!req.teacher) {
      return res.status(401).json({
        success: false,
        message: "Teacher authentication required",
      });
    }

    const teacher = await Teacher.findById(
      req.teacher._id
    ).select("-password");

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
    console.error(
      "GET TEACHER PROFILE ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================================================
// UPDATE TEACHER PROFILE
// =====================================================

export const updateTeacherProfile = async (
  req,
  res
) => {
  try {
    if (!req.teacher) {
      return res.status(401).json({
        success: false,
        message: "Teacher authentication required",
      });
    }

    const teacher = await Teacher.findById(
      req.teacher._id
    );

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    // Update only allowed profile fields
    if (req.body.fullName !== undefined) {
      teacher.fullName = req.body.fullName;
    }

    if (req.body.name !== undefined) {
      teacher.fullName = req.body.name;
    }

    if (req.body.mobile !== undefined) {
      teacher.mobile = req.body.mobile;
    }

    if (req.body.phone !== undefined) {
      teacher.mobile = req.body.phone;
    }

    if (req.body.address !== undefined) {
      teacher.address = req.body.address;
    }

    if (
      req.body.qualification !== undefined
    ) {
      teacher.qualification =
        req.body.qualification;
    }

    if (req.body.experience !== undefined) {
      teacher.experience =
        req.body.experience;
    }

    if (req.body.subject !== undefined) {
      teacher.subject = req.body.subject;
    }

    await teacher.save();

    const updatedTeacher =
      await Teacher.findById(
        teacher._id
      ).select("-password");

    res.status(200).json({
      success: true,
      message:
        "Profile updated successfully",
      teacher: updatedTeacher,
    });
  } catch (error) {
    console.error(
      "UPDATE TEACHER PROFILE ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================================================
// CHANGE TEACHER PASSWORD
// =====================================================

export const changeTeacherPassword = async (
  req,
  res
) => {
  try {
    const {
      currentPassword,
      newPassword,
      confirmPassword,
    } = req.body;

    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Current password, new password and confirm password are required",
      });
    }

    // Check new password
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "New passwords do not match",
      });
    }

    // Minimum password length
    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message:
          "New password must be at least 6 characters",
      });
    }

    if (!req.teacher) {
      return res.status(401).json({
        success: false,
        message: "Teacher authentication required",
      });
    }

    const teacher = await Teacher.findById(
      req.teacher._id
    );

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    // Check current password
    const isMatch = await bcrypt.compare(
      currentPassword,
      teacher.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message:
          "Current password is incorrect",
      });
    }

    // Hash new password
    const hashedPassword =
      await bcrypt.hash(newPassword, 10);

    teacher.password = hashedPassword;

    await teacher.save();

    res.status(200).json({
      success: true,
      message:
        "Password changed successfully",
    });
  } catch (error) {
    console.error(
      "CHANGE TEACHER PASSWORD ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================================================
// GET TEACHER STUDENTS
// =====================================================

export const getTeacherStudents = async (
  req,
  res
) => {
  try {
    if (!req.teacher) {
      return res.status(401).json({
        success: false,
        message: "Teacher authentication required",
      });
    }

    const teacher = req.teacher;

    const query = {};

    // Get students of teacher's class
    if (teacher.className) {
      query.className = teacher.className;
    }

    // If teacher has section, filter by section
    if (teacher.section) {
      query.section = teacher.section;
    }

    const students = await Student.find(
      query
    )
      .select("-password")
      .sort({
        rollNumber: 1,
      });

    res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (error) {
    console.error(
      "GET TEACHER STUDENTS ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// =====================================================
// GET SINGLE TEACHER STUDENT
// =====================================================

export const getTeacherStudent = async (
  req,
  res
) => {
  try {
    if (!req.teacher) {
      return res.status(401).json({
        success: false,
        message: "Teacher authentication required",
      });
    }

    const teacher = req.teacher;

    const student = await Student.findById(
      req.params.id
    ).select("-password");

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // Check class
    if (
      teacher.className &&
      student.className !==
        teacher.className
    ) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // Check section
    if (
      teacher.section &&
      student.section !==
        teacher.section
    ) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    console.error(
      "GET TEACHER STUDENT ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};