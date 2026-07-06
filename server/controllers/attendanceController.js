import Attendance from "../models/Attendance.js";

// ======================================
// Save Attendance
// ======================================

export const saveAttendance = async (req, res) => {
  try {
    const teacher = req.teacher;

    let { attendance, date } = req.body;

    if (!attendance || attendance.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Attendance data is required",
      });
    }

    // If frontend doesn't send date, use today's date
    if (!date) {
      const today = new Date();
      date = today.toISOString().split("T")[0]; // YYYY-MM-DD
    }

    // Check if attendance already exists
    const existingAttendance = await Attendance.findOne({
      className: teacher.className,
      section: teacher.section,
      attendanceDate: date,
    });

    if (existingAttendance) {
      return res.status(400).json({
        success: false,
        message: "Attendance already submitted for this date",
      });
    }

    const attendanceData = attendance.map((item) => ({
      teacher: teacher._id,
      student: item.student,
      className: teacher.className,
      section: teacher.section,
      attendanceDate: date,
      status: item.status,
    }));

    console.log("Attendance Data:", attendanceData);

    await Attendance.insertMany(attendanceData);

    res.status(201).json({
      success: true,
      message: "Attendance saved successfully",
    });

  } catch (error) {
    console.log("Attendance Save Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Get Attendance By Date
// ======================================

export const getAttendanceHistory = async (req, res) => {
  try {
    const teacher = req.teacher;
    const { date } = req.params;

    const attendance = await Attendance.find({
      className: teacher.className,
      section: teacher.section,
      attendanceDate: date,
    })
      .populate(
        "student",
        "firstName lastName rollNumber className section"
      )
      .sort({ student: 1 });

    if (attendance.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No attendance found",
      });
    }

    const totalStudents = attendance.length;
    const presentCount = attendance.filter(
      (item) => item.status === "Present"
    ).length;
    const absentCount = attendance.filter(
      (item) => item.status === "Absent"
    ).length;

    res.status(200).json({
      success: true,
      className: teacher.className,
      section: teacher.section,
      attendanceDate: date,
      totalStudents,
      presentCount,
      absentCount,
      data: attendance,
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
// Teacher Attendance History
// ======================================

export const getTeacherAttendanceHistory = async (req, res) => {
  try {
    const teacher = req.teacher;

    const attendance = await Attendance.find({
      className: teacher.className,
      section: teacher.section,
    })
      .populate(
        "student",
        "firstName lastName rollNumber className section"
      )
      .sort({ attendanceDate: -1 });

    res.status(200).json({
      success: true,
      count: attendance.length,
      data: attendance,
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
// Student Attendance
// ======================================

// export const getStudentAttendance = async (req, res) => {
//   try {

//     console.log("Logged In Student ID:", req.student._id);

//     const attendance = await Attendance.find({
//       student: req.student._id,
//     }).sort({
//       attendanceDate: -1,
//     });

//     console.log("Attendance Found:", attendance);

//     const totalDays = attendance.length;

//     const presentDays = attendance.filter(
//       (item) => item.status === "Present"
//     ).length;

//     const absentDays = attendance.filter(
//       (item) => item.status === "Absent"
//     ).length;

//     const percentage =
//       totalDays === 0
//         ? 0
//         : ((presentDays / totalDays) * 100).toFixed(2);

//     res.status(200).json({
//       success: true,
//       totalDays,
//       presentDays,
//       absentDays,
//       percentage,
//       data: attendance,
//     });

//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export const getStudentAttendance = async (req, res) => {
  try {

    console.log("Logged Student ID:", req.student._id.toString());

    const attendance = await Attendance.find({
      student: req.student._id,
    });

    console.log("Attendance Found:", attendance);

    res.json({
      success: true,
      data: attendance,
      totalDays: attendance.length,
      presentDays: attendance.filter(a => a.status === "Present").length,
      absentDays: attendance.filter(a => a.status === "Absent").length,
      percentage:
        attendance.length === 0
          ? 0
          : (
              attendance.filter(a => a.status === "Present").length /
              attendance.length *
              100
            ).toFixed(2),
    });

  } catch (err) {
    console.log(err);
  }
};