import express from "express";

import {
  studentLogin,
  getStudentProfile,
  changeStudentPassword,
  getStudentSubjects,
  getStudentAttendance,
  getStudentFees
} from "../controllers/studentAuthController.js";

import studentAuth from "../middleware/studentAuth.js";

const router = express.Router();

// ===============================
// Student Login
// ===============================

router.post(
  "/login",
  studentLogin
);

// ===============================
// Student Profile
// ===============================

router.get(
  "/profile",
  studentAuth,
  getStudentProfile
);

router.put(
  "/change-password",
  studentAuth,
  changeStudentPassword
);

router.get(
  "/subjects",
  studentAuth,
  getStudentSubjects
);

router.get(
  "/attendance",
  studentAuth,
  getStudentAttendance
);

router.get(
  "/fees",
  studentAuth,
  getStudentFees
);

export default router;