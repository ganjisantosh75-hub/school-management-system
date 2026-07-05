// import express from "express";
// import { loginTeacher } from "../controllers/teacherAuthController.js";

// const router = express.Router();

// // ==============================
// // Teacher Login
// // ==============================

// router.post("/login", loginTeacher);

// export default router;

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

// export const getTeacherStudent = async (req, res) => {
//   try {
//     const teacher = req.teacher;

//     const student = await Student.findOne({
//       _id: req.params.id,
//       className: teacher.className,
//       section: teacher.section,
//     });

//     if (!student) {
//       return res.status(404).json({
//         success: false,
//         message: "Student not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: student,
//     });

//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export default router;