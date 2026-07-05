import express from "express";

import {
  createGallery,
  getGallery,
  getGalleryItem,
  updateGallery,
  deleteGallery,
} from "../controllers/galleryController.js";

import upload from "../middleware/upload.js";

const router = express.Router();

// ==============================
// Create Gallery Item
// ==============================

router.post("/", upload.single("image"), createGallery);

// ==============================
// Get All Gallery Items
// ==============================

router.get("/", getGallery);

// ==============================
// Get Single Gallery Item
// ==============================

router.get("/:id", getGalleryItem);

// ==============================
// Update Gallery Item
// ==============================

router.put("/:id", upload.single("image"), updateGallery);

// ==============================
// Delete Gallery Item
// ==============================

router.delete("/:id", deleteGallery);

export default router;