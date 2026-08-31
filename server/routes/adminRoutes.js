import express from "express";


import {
  registerAdmin,
  loginAdmin,
  changePassword
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.put("/change-password", changePassword);


export default router;  