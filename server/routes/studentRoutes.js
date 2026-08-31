import express from "express";

import {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  registerStudent
  
} from "../controllers/studentControllers.js";

const router = express.Router();

// Create Student
router.post("/", createStudent);

// Get All Students
router.get("/", getStudents);

// Get Single Student
router.get("/:id", getStudent);

// Update Student
router.put("/:id", updateStudent);

// Delete Student
router.delete("/:id", deleteStudent);
router.post("/register", registerStudent);


export default router;