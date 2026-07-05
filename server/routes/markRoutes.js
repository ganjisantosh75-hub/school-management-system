import express from "express";

import {
  saveMarks,
  getTeacherMarks,
  deleteMark,
  getStudentMarks,
} from "../controllers/markController.js";

import teacherAuth from "../middleware/teacherAuth.js";
import studentAuth from "../middleware/studentAuth.js";

const router = express.Router();

// ======================================
// Save Marks
// ======================================

router.post(
  "/save",
  teacherAuth,
  saveMarks
);

// ======================================
// Student Marks
// GET /api/marks/student
// ======================================

router.get(
  "/student",
  studentAuth,
  getStudentMarks
);

// ======================================
// Get Teacher Marks
// ======================================

router.get(
  "/",
  teacherAuth,
  getTeacherMarks
);

// ======================================
// Delete Marks
// ======================================

router.delete(
  "/:id",
  teacherAuth,
  deleteMark
);

export default router;