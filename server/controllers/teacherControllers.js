import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
import bcrypt from "bcryptjs";



// =====================================================
// Teacher Registration
// =====================================================

export const registerTeacher = async (req, res) => {
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


    // Required fields
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Full name, email and password are required",
      });
    }


    // Check existing email
    const existingTeacher = await Teacher.findOne({
      email: email.toLowerCase(),
    });

    if (existingTeacher) {
      return res.status(409).json({
        success: false,
        message:
          "Teacher with this email already exists",
      });
    }


    // Check employee ID
    if (employeeId) {

      const existingEmployee =
        await Teacher.findOne({
          employeeId,
        });

      if (existingEmployee) {
        return res.status(409).json({
          success: false,
          message:
            "Employee ID already exists",
        });
      }
    }


    // Hash password
    const hashedPassword =
      await bcrypt.hash(password, 10);


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

      email: email.toLowerCase(),

      joiningDate,

      salary,

      address,

      password: hashedPassword,

    });


    res.status(201).json({

      success: true,

      message:
        "Teacher registered successfully",

      data: {

        id: teacher._id,

        fullName: teacher.fullName,

        email: teacher.email,

        employeeId: teacher.employeeId,

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
// Create Teacher - Admin
// =====================================================

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


    // Check email
    const existingTeacher =
      await Teacher.findOne({
        email: email?.toLowerCase(),
      });


    if (existingTeacher) {

      return res.status(400).json({

        success: false,

        message:
          "Teacher with this email already exists",

      });
    }


    // Check employee ID
    if (employeeId) {

      const existingEmployee =
        await Teacher.findOne({
          employeeId,
        });

      if (existingEmployee) {

        return res.status(400).json({

          success: false,

          message:
            "Employee ID already exists",

        });
      }
    }


    // Default password
    const finalPassword =
      password || "teacher123";


    // Hash password
    const hashedPassword =
      await bcrypt.hash(
        finalPassword,
        10
      );


    // Create Teacher
    const teacher =
      await Teacher.create({

        fullName,

        employeeId,

        gender,

        qualification,

        subject,

        className,

        section,

        experience,

        mobile,

        email:
          email?.toLowerCase(),

        joiningDate,

        salary,

        address,

        password:
          hashedPassword,

      });


    res.status(201).json({

      success: true,

      message:
        "Teacher added successfully",

      data: teacher,

    });

  } catch (error) {

    console.error(
      "CREATE TEACHER ERROR:",
      error
    );

    res.status(500).json({

      success: false,

      message: error.message,

    });
  }
};


// =====================================================
// Get All Teachers
// =====================================================

export const getTeachers = async (req, res) => {

  try {

    const teachers =
      await Teacher.find()
        .select("-password")
        .sort({
          createdAt: -1,
        });


    res.status(200).json({

      success: true,

      count:
        teachers.length,

      data: teachers,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });
  }
};


// =====================================================
// Get Single Teacher
// =====================================================

export const getTeacher = async (req, res) => {

  try {

    const teacher =
      await Teacher.findById(
        req.params.id
      ).select("-password");


    if (!teacher) {

      return res.status(404).json({

        success: false,

        message:
          "Teacher not found",

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


// =====================================================
// Update Teacher
// =====================================================

export const updateTeacher = async (req, res) => {

  try {

    const updateData =
      { ...req.body };


    // Hash new password
    if (updateData.password) {

      updateData.password =
        await bcrypt.hash(
          updateData.password,
          10
        );
    }


    // Lowercase email
    if (updateData.email) {

      updateData.email =
        updateData.email.toLowerCase();

    }


    const teacher =
      await Teacher.findByIdAndUpdate(

        req.params.id,

        updateData,

        {
          new: true,
          runValidators: true,
        }

      ).select("-password");


    if (!teacher) {

      return res.status(404).json({

        success: false,

        message:
          "Teacher not found",

      });
    }


    res.status(200).json({

      success: true,

      message:
        "Teacher updated successfully",

      data: teacher,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });
  }
};


// =====================================================
// Delete Teacher
// =====================================================

export const deleteTeacher = async (req, res) => {

  try {

    const teacher =
      await Teacher.findByIdAndDelete(
        req.params.id
      );


    if (!teacher) {

      return res.status(404).json({

        success: false,

        message:
          "Teacher not found",

      });
    }


    res.status(200).json({

      success: true,

      message:
        "Teacher deleted successfully",

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });
  }
};


// =====================================================
// Get Teacher Students
// =====================================================

export const getTeacherStudents = async (
  req,
  res
) => {

  try {

    const teacher =
      req.teacher;


    const students =
      await Student.find({

        className:
          teacher.className,

        section:
          teacher.section,

      })
      .select("-password")
      .sort({

        rollNumber: 1,

      });


    res.status(200).json({

      success: true,

      count:
        students.length,

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