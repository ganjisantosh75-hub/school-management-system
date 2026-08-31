import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      default: "",
    },

    firstName: {
      type: String,
      trim: true,
      default: "",
    },

    lastName: {
      type: String,
      trim: true,
      default: "",
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    parentPhone: {
      type: String,
      trim: true,
      default: "",
    },

    studentId: {
      type: String,
      trim: true,
      default: "",
    },

    admissionNumber: {
      type: String,
      trim: true,
      default: "",
    },

    className: {
      type: String,
      trim: true,
      default: "",
    },

    section: {
      type: String,
      trim: true,
      default: "A",
    },

    rollNumber: {
      type: String,
      trim: true,
      default: "",
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Other",
    },

    dateOfBirth: {
      type: Date,
      default: null,
    },

    fatherName: {
      type: String,
      trim: true,
      default: "",
    },

    motherName: {
      type: String,
      trim: true,
      default: "",
    },

    address: {
      type: String,
      trim: true,
      default: "",
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

// Synchronize name <-> firstName/lastName and studentId <-> admissionNumber
studentSchema.pre("save", function (next) {
  // Sync name with firstName / lastName
  if (!this.name && (this.firstName || this.lastName)) {
    this.name = `${this.firstName || ""} ${this.lastName || ""}`.trim();
  } else if (this.name && !this.firstName) {
    const parts = this.name.trim().split(" ");
    this.firstName = parts[0] || "";
    this.lastName = parts.slice(1).join(" ") || "";
  }

  // Sync studentId <-> admissionNumber
  if (!this.studentId && this.admissionNumber) {
    this.studentId = this.admissionNumber;
  }
  if (!this.admissionNumber && this.studentId) {
    this.admissionNumber = this.studentId;
  }

  // Sync phone <-> parentPhone
  if (!this.phone && this.parentPhone) {
    this.phone = this.parentPhone;
  }
  if (!this.parentPhone && this.phone) {
    this.parentPhone = this.phone;
  }

  next();
});

// Compare password method
studentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("Student", studentSchema);