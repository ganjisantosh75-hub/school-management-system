import mongoose from "mongoose";

const markSchema = new mongoose.Schema(
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

    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
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

    examName: {
      type: String,
      required: true,
      enum: [
        "Unit Test 1",
        "Unit Test 2",
        "Half Yearly",
        "Pre Board",
        "Annual Exam",
      ],
    },

    marksObtained: {
      type: Number,
      required: true,
      min: 0,
    },

    totalMarks: {
      type: Number,
      required: true,
      default: 100,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate marks
markSchema.index(
  {
    student: 1,
    subject: 1,
    examName: 1,
  },
  {
    unique: true,
  }
);

export default mongoose.model("Mark", markSchema);