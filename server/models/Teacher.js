import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },

        mobile: {
            type: String,
            required: true,
        },

        gender: {
            type: String,
            required: true,
            enum: ["Male", "Female", "Other"],
        },

        qualification: {
            type: String,
            required: true,
        },

        experience: {
            type: Number,
            required: true,
        },

        subject: {
            type: String,
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

        salary: {
            type: Number,
            required: true,
        },

        employeeId: {
            type: String,
            required: true,
        },

        joiningDate: {
            type: Date,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;