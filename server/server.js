import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";

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

// Load Environment Variables (support running from root or server directory)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });
dotenv.config(); // fallback to current working directory

const app = express();

// ==============================
// Middleware
// ==============================

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

// ==============================
// Serve Uploaded Images
// ==============================

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// ==============================
// Test Route
// ==============================

app.get("/", (req, res) => {
  res.status(200).send(
    "KAMALAM PUBLIC SCHOOL Backend Running Successfully 🚀"
  );
});

// ==============================
// Authentication Routes
// ==============================

app.use("/api/admin", adminRoutes);
app.use("/api/teacher", teacherAuthRoutes);
app.use("/api/student", studentAuthRoutes);

// ==============================
// Management Routes
// ==============================

app.use("/api/admissions", admissionRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/fees", feeRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/marks", markRoutes);
app.use("/api/messages", messageRoutes);

// ==============================
// Default Admin Initializer
// ==============================

const createDefaultAdmin = async () => {
  try {
    const adminEmail = "admin@gmail.com";
    const existingAdmin = await Admin.findOne({ email: adminEmail });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      await Admin.create({
        name: "Super Admin",
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
      });
      console.log("✅ Default Admin Created (admin@gmail.com / admin123)");
    }
  } catch (error) {
    console.error("Default Admin Check Error:", error.message);
  }
};

// ==============================
// Start Server
// ==============================

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in environment variables!");
}

console.log("Connecting to MongoDB...");

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected");
    await createDefaultAdmin();
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Error:", error.message);
  });

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});