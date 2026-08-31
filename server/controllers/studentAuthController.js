import Student from "../models/Student.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Subject from "../models/Subject.js";
import Attendance from "../models/Attendance.js";
import Fee from "../models/Fee.js";

// ======================================
// Student Registration
// ======================================

export const registerStudent = async (req, res) => {
  try {
    const {
      name,
      firstName,
      lastName,
      email,
      phone,
      parentPhone,
      studentId,
      admissionNumber,
      className,
      rollNumber,
      rollNo,
      password,
      gender,
      dateOfBirth,
      fatherName,
      motherName,
      address,
      section,
    } = req.body;

    const studentName = name || (firstName ? `${firstName} ${lastName || ""}`.trim() : "");
    const studentIdentifier = studentId || admissionNumber || rollNumber || rollNo;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    if (!studentName) {
      return res.status(400).json({
        success: false,
        message: "Student name is required",
      });
    }

    // Check existing student by email
    const existingStudent = await Student.findOne({
      email: email.toLowerCase(),
    });

    if (existingStudent) {
      return res.status(409).json({
        success: false,
        message: "Student with this email already exists",
      });
    }

    // Check existing studentId / admissionNumber if provided
    if (studentIdentifier) {
      const existingId = await Student.findOne({
        $or: [
          { studentId: studentIdentifier },
          { admissionNumber: studentIdentifier },
        ],
      });

      if (existingId) {
        return res.status(409).json({
          success: false,
          message: "Student ID / Admission Number already exists",
        });
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create student
    const student = await Student.create({
      name: studentName,
      firstName: firstName || studentName.split(" ")[0],
      lastName: lastName || studentName.split(" ").slice(1).join(" ") || "",
      email: email.toLowerCase(),
      phone: phone || parentPhone || "",
      parentPhone: parentPhone || phone || "",
      studentId: studentIdentifier || `STU-${Date.now().toString().slice(-6)}`,
      admissionNumber: admissionNumber || studentIdentifier || `ADM-${Date.now().toString().slice(-6)}`,
      className: className || "",
      section: section || "A",
      rollNumber: rollNumber || rollNo || "",
      gender: gender || "Other",
      dateOfBirth: dateOfBirth || null,
      fatherName: fatherName || "",
      motherName: motherName || "",
      address: address || "",
      password: hashedPassword,
      role: "student",
    });

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      student: {
        id: student._id,
        _id: student._id,
        name: student.name,
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        studentId: student.studentId,
        admissionNumber: student.admissionNumber,
        className: student.className,
        section: student.section,
        rollNumber: student.rollNumber,
        role: "student",
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

// ======================================
// Student Login
// ======================================

export const studentLogin = async (req, res) => {
  try {
    const { email, admissionNumber, studentId, password } = req.body;
    const loginIdentifier = email || admissionNumber || studentId;

    // Validation
    if (!loginIdentifier || !password) {
      return res.status(400).json({
        success: false,
        message: "Email or Admission Number and Password are required",
      });
    }

    // Find Student by email, admissionNumber, or studentId
    const student = await Student.findOne({
      $or: [
        { email: loginIdentifier.toLowerCase() },
        { admissionNumber: loginIdentifier },
        { studentId: loginIdentifier },
      ],
    });

    if (!student) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check Password
    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    // JWT Token
    const token = jwt.sign(
      {
        id: student._id,
        role: "student",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const studentInfo = {
      _id: student._id,
      id: student._id,
      name: student.name || `${student.firstName || ""} ${student.lastName || ""}`.trim(),
      firstName: student.firstName || student.name?.split(" ")[0] || "Student",
      lastName: student.lastName || student.name?.split(" ").slice(1).join(" ") || "",
      email: student.email,
      admissionNumber: student.admissionNumber || student.studentId,
      studentId: student.studentId || student.admissionNumber,
      className: student.className,
      section: student.section,
      rollNumber: student.rollNumber,
      role: "student",
    };

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      data: studentInfo,
      student: studentInfo,
    });

  } catch (error) {
    console.error("STUDENT LOGIN ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Student Profile
// ======================================

export const getStudentProfile = async (req, res) => {
  try {

    res.status(200).json({
      success: true,
      data: req.student,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// Change Student Password
// ======================================

export const changeStudentPassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const student = await Student.findById(req.student._id);

    const isMatch = await student.matchPassword(currentPassword);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    student.password = newPassword;

    await student.save();

    res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getStudentSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find({
      className: req.student.className,
    });

    res.json({
      success: true,
      data: subjects,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getStudentAttendance = async (req, res) => {
  try {

    const attendance = await Attendance.find({
  student: req.student._id,
}).sort({ attendanceDate: -1 });

    const totalDays = attendance.length;

    const presentDays = attendance.filter(
      (item) => item.status === "Present"
    ).length;

    const absentDays = attendance.filter(
      (item) => item.status === "Absent"
    ).length;

    const percentage =
      totalDays === 0
        ? 0
        : Math.round((presentDays / totalDays) * 100);

    res.json({
      success: true,
      data: attendance,
      totalDays,
      presentDays,
      absentDays,
      percentage,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getStudentFees = async (req, res) => {
  try {

    console.log("Student Roll:", req.student.rollNumber);

    const fee = await Fee.findOne({
      rollNumber: req.student.rollNumber,
    });

    console.log("Fee Found:", fee);

    if (!fee) {
      return res.status(404).json({
        success: false,
        message: "Fee record not found",
      });
    }

    res.status(200).json({
      success: true,
      data: fee,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};