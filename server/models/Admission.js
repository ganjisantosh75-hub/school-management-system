import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },

    parentName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    studentClass: {
      type: String,
      required: true,
    },

    dob: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    previousSchool: {
      type: String,
    },

    parentMobile: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Admission", admissionSchema);