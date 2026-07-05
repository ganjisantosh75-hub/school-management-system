import express from "express";

import {
  createNotice,
  getNotices,
  getNotice,
  updateNotice,
  deleteNotice,
} from "../controllers/noticeController.js";

const router = express.Router();

// Create Notice
router.post("/", createNotice);

// Get All Notices
router.get("/", getNotices);

// Get Single Notice
router.get("/:id", getNotice);

// Update Notice
router.put("/:id", updateNotice);

// Delete Notice
router.delete("/:id", deleteNotice);

export default router;