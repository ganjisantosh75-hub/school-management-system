import express from "express";

import {
  saveAttendance,
  getAttendanceHistory,
  getTeacherAttendanceHistory,
  getStudentAttendance,
} from "../controllers/attendanceController.js";

import teacherAuth from "../middleware/teacherAuth.js";
import studentAuth from "../middleware/studentAuth.js";

const router = express.Router();

// ======================================
// Save Attendance
// ======================================

router.post(
  "/save",
  teacherAuth,
  saveAttendance
);

// ======================================
// Student Attendance
// GET /api/attendance/student
// ======================================

router.get(
  "/student",
  studentAuth,
  getStudentAttendance
);

// ======================================
// Attendance By Date
// GET /api/attendance/history/2026-07-04
// ======================================

router.get(
  "/history/:date",
  teacherAuth,
  getAttendanceHistory
);

// ======================================
// Teacher Attendance History
// GET /api/attendance/history
// ======================================

router.get(
  "/history",
  teacherAuth,
  getTeacherAttendanceHistory
);

export default router;