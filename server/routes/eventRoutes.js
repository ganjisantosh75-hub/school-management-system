import express from "express";

import {
  createEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";

const router = express.Router();

// Create Event
router.post("/", createEvent);

// Get All Events
router.get("/", getEvents);

// Get Single Event
router.get("/:id", getEvent);

// Update Event
router.put("/:id", updateEvent);

// Delete Event
router.delete("/:id", deleteEvent);

export default router;