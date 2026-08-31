import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      default: "",
    },

    name: {
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

    mobile: {
      type: String,
      trim: true,
      default: "",
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    employeeId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    subject: {
      type: String,
      trim: true,
      default: "",
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Other",
    },

    qualification: {
      type: String,
      trim: true,
      default: "",
    },

    experience: {
      type: mongoose.Schema.Types.Mixed,
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
      default: "",
    },

    salary: {
      type: mongoose.Schema.Types.Mixed,
      default: "",
    },

    joiningDate: {
      type: Date,
      default: Date.now,
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
      default: "teacher",
    },
  },
  {
    timestamps: true,
  }
);

// Synchronize name <-> fullName and phone <-> mobile
teacherSchema.pre("save", function (next) {
  if (!this.fullName && this.name) {
    this.fullName = this.name;
  }
  if (!this.name && this.fullName) {
    this.name = this.fullName;
  }
  if (!this.mobile && this.phone) {
    this.mobile = this.phone;
  }
  if (!this.phone && this.mobile) {
    this.phone = this.mobile;
  }
  next();
});

export default mongoose.model("Teacher", teacherSchema);