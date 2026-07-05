import express from "express";

import {
  createMessage,
  getMessages,
  getMessage,
  deleteMessage,
} from "../controllers/messageController.js";

const router = express.Router();

// Public
router.post("/", createMessage);

// Admin
router.get("/", getMessages);
router.get("/:id", getMessage);
router.delete("/:id", deleteMessage);

export default router;