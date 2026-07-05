import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    noticeDate: {
      type: Date,
      required: true,
    },

    audience: {
      type: String,
      enum: [
        "All",
        "Students",
        "Teachers",
      ],
      default: "All",
    },
  },
  {
    timestamps: true,
  }
);

const Notice = mongoose.model("Notice", noticeSchema);

export default Notice;