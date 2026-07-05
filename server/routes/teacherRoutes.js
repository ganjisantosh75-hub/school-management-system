import express from "express";


import {
  createTeacher,
  getTeachers,
  getTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherStudents,
} from "../controllers/teacherControllers.js";

const router = express.Router();

// Create Teacher
router.post("/", createTeacher);

// Get All Teachers
router.get("/", getTeachers);

// Get Single Teacher
router.get("/:id", getTeacher);

// Update Teacher
router.put("/:id", updateTeacher);

// Delete Teacher
router.delete("/:id", deleteTeacher);

// router.get("/students", teacherAuth,getTeacherStudents);

export default router;