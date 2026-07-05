import express from "express";
import {
  loginAdmin,
  changePassword,
} from "../controllers/adminController.js";

const router = express.Router();

// ==============================
// Admin Login
// ==============================

router.post("/login", loginAdmin);

// ==============================
// Change Password
// ==============================

router.put("/change-password", changePassword);

export default router;