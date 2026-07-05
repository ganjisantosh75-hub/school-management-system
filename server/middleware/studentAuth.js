import jwt from "jsonwebtoken";
import Student from "../models/Student.js";

const studentAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const student = await Student.findById(decoded.id).select("-password");

    if (!student) {
      return res.status(401).json({
        success: false,
        message: "Student not found",
      });
    }

    req.student = student;

    next();

  } catch (error) {
    console.log(error);

    res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

export default studentAuth;