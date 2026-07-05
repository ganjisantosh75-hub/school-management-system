import express from "express";

import {
  createSubject,
  getSubjects,
  getSubject,
  updateSubject,
  deleteSubject,
    getStudentSubjects,
} from "../controllers/subjectController.js";

// import adminAuth from "../middleware/adminAuth.js";
import studentAuth from "../middleware/studentAuth.js";

const router = express.Router();

// Create Subject
router.post("/", createSubject);

// Get All Subjects
router.get("/", getSubjects);

// Student Subjects
router.get(
  "/student",
  studentAuth,
  getStudentSubjects
);

// Get Single Subject
router.get("/:id", getSubject);

// Update Subject
router.put("/:id", updateSubject);

// Delete Subject
router.delete("/:id", deleteSubject);


export default router;