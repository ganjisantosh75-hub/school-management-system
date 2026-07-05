import Student from "../models/Student.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// ======================================
// Student Login
// ======================================

export const studentLogin = async (req, res) => {
  try {
    const { admissionNumber, password } = req.body;

    // Validation
    if (!admissionNumber || !password) {
      return res.status(400).json({
        success: false,
        message: "Admission Number and Password are required",
      });
    }

    // Find Student
    const student = await Student.findOne({ admissionNumber });

    if (!student) {
      return res.status(401).json({
        success: false,
        message: "Invalid Admission Number",
      });
    }

    // Check Password
    const isMatch = await student.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // JWT Token
    const token = jwt.sign(
      {
        id: student._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      data: {
        _id: student._id,
        firstName: student.firstName,
        lastName: student.lastName,
        admissionNumber: student.admissionNumber,
        className: student.className,
        section: student.section,
      },
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