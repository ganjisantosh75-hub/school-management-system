import express from "express";

import {
  studentLogin,
  getStudentProfile,
  changeStudentPassword
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

export default router;