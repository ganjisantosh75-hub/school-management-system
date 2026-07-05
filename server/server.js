import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import path from "path";

import Admin from "./models/Admin.js";

import admissionRoutes from "./routes/admissionRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import subjectRoutes from "./routes/subjectRoutes.js";
import noticeRoutes from "./routes/noticeRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import feeRoutes from "./routes/feeRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import teacherAuthRoutes from "./routes/teacherAuthRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import markRoutes from "./routes/markRoutes.js";
import studentAuthRoutes from "./routes/studentAuthRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

// ==============================
// Middleware
// ==============================

app.use(cors());
app.use(express.json());

// ==============================
// Serve Uploaded Images
// ==============================

app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"))
);

// ==============================
// MongoDB Connection
// ==============================

console.log("MONGO_URI =", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error");
    console.log(err);
  });

// ==============================
// Test Route
// ==============================

app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

// ==============================
// API Routes
// ==============================

app.use("/api/admissions", admissionRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/fees", feeRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/teacher", teacherAuthRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/marks", markRoutes);
app.use("/api/student", studentAuthRoutes);
app.use("/api/messages", messageRoutes);

// ==============================
// Create Default Admin
// ==============================

const createAdmin = async () => {
  try {
    const adminExists = await Admin.findOne({
      email: "admin@gmail.com",
    });

    if (adminExists) {
      console.log("✅ Admin already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await Admin.create({
      email: "admin@gmail.com",
      password: hashedPassword,
    });

    console.log("✅ Default Admin Created");
  } catch (error) {
    console.log(error);
  }
};

createAdmin();

// ==============================
// Start Server
// ==============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});