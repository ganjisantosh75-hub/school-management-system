import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    className: {
      type: String,
      required: true,
    },

    section: {
      type: String,
      required: true,
    },

    attendanceDate: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Present", "Absent"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate attendance for same student on same date
attendanceSchema.index(
  {
    student: 1,
    attendanceDate: 1,
  },
  {
    unique: true,
  }
);

export default mongoose.model(
  "Attendance",
  attendanceSchema
);