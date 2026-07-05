import express from "express";

import {
  createFee,
  getFees,
  getFee,
  updateFee,
  deleteFee,
  getStudentFeeStatus,
} from "../controllers/feeController.js";

import studentAuth from "../middleware/studentAuth.js";

const router = express.Router();

// ======================================
// Create Fee
// ======================================

router.post("/", createFee);

// ======================================
// Get All Fees
// ======================================

router.get("/", getFees);

// ======================================
// Student Fee Status
// GET /api/fees/student
// ======================================

router.get(
  "/student",
  studentAuth,
  getStudentFeeStatus
);

// ======================================
// Get Single Fee
// ======================================

router.get("/:id", getFee);

// ======================================
// Update Fee
// ======================================

router.put("/:id", updateFee);

// ======================================
// Delete Fee
// ======================================

router.delete("/:id", deleteFee);

export default router;