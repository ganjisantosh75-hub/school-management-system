

import express from "express";
import {
  loginTeacher,
  getTeacherProfile,
  updateTeacherProfile,
  changeTeacherPassword,
  getTeacherStudents,
  getTeacherStudent,  

} from "../controllers/teacherAuthController.js";

import teacherAuth from "../middleware/teacherAuth.js";
import Student from "../models/Student.js";

const router = express.Router();

// ==============================
// Login
// ==============================

router.post("/login", loginTeacher);

// ==============================
// Get Profile
// ==============================

router.get(
  "/profile",
  teacherAuth,
  getTeacherProfile
);

// ==============================
// Update Profile
// ==============================

router.put(
  "/profile",
  teacherAuth,
  updateTeacherProfile
);

// Change Password
router.put(
  "/change-password",
  teacherAuth,
  changeTeacherPassword
);

router.get(
  "/students",
  teacherAuth,
  getTeacherStudents
);

router.get(
  "/student/:id",
  teacherAuth,
  getTeacherStudent
);



export default router;