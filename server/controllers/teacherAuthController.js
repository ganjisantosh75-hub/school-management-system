import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



// ==============================
// Teacher Login
// ==============================

export const loginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;

    const teacher = await Teacher.findOne({ email });

    if (!teacher) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      teacher.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: teacher._id,
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
        fullName: teacher.fullName,
        email: teacher.email,
        subject: teacher.subject,
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

// ==============================
// Get Teacher Profile
// ==============================

export const getTeacherProfile = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.teacher._id).select("-password");

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
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==============================
// Update Teacher Profile
// ==============================

export const updateTeacherProfile = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.teacher._id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    teacher.fullName =
      req.body.fullName || teacher.fullName;

    teacher.mobile =
      req.body.mobile || teacher.mobile;

    teacher.address =
      req.body.address || teacher.address;

    teacher.qualification =
      req.body.qualification || teacher.qualification;

    teacher.experience =
      req.body.experience || teacher.experience;

    await teacher.save();

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      teacher,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Change Password
// ==============================

export const changeTeacherPassword = async (req, res) => {
  try {
    const {
      currentPassword,
      newPassword,
      confirmPassword,
    } = req.body;

    // Password Match Check
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "New passwords do not match",
      });
    }

    // Find Teacher
    const teacher = await Teacher.findById(req.teacher._id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    // Verify Current Password
    const isMatch = await bcrypt.compare(
      currentPassword,
      teacher.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    // Hash New Password
    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );

    teacher.password = hashedPassword;

    await teacher.save();

    res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get Teacher Students
// ==============================

// import Student from "../models/Student.js";

export const getTeacherStudents = async (req, res) => {
  try {
    const teacher = req.teacher;

    const students = await Student.find({
      className: teacher.className,
    }).sort({
      rollNumber: 1,
    });

    res.status(200).json({
      success: true,
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

export const getTeacherStudent = async (req, res) => {
  try {
    const teacher = req.teacher;

    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    if (student.className !== teacher.className) {
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
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};