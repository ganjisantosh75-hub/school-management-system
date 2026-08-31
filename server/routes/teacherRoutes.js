import express from "express";


import {
  registerTeacher,
  createTeacher,
  getTeachers,
  getTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherStudents,
} from "../controllers/teacherControllers.js";

const router = express.Router();


// =====================================================
// Teacher Registration
// =====================================================

router.post(
  "/register",
  registerTeacher
);


// =====================================================
// Teacher CRUD
// =====================================================

router.post(
  "/",
  createTeacher
);

router.get(
  "/",
  getTeachers
);

router.get(
  "/:id",
  getTeacher
);

router.put(
  "/:id",
  updateTeacher
);

router.delete(
  "/:id",
  deleteTeacher
);


// =====================================================
// Teacher Students
// =====================================================

router.get(
  "/my-students",
  getTeacherStudents
);


export default router;