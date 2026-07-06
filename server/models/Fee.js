import mongoose from "mongoose";

const feeSchema = new mongoose.Schema(
  {

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    studentName: {
      type: String,
      required: true,
      trim: true,
    },

    rollNumber: {
      type: String,
      required: true,
      trim: true,
    },

    className: {
      type: String,
      required: true,
      trim: true,
    },

    totalFee: {
      type: Number,
      required: true,
    },

    paidAmount: {
      type: Number,
      required: true,
      default: 0,
    },

    pendingAmount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Paid", "Pending"],
      default: "Pending",
    },

    paymentDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Fee", feeSchema);