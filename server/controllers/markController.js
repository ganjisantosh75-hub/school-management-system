import Mark from "../models/Mark.js";

// ======================================
// Save Marks
// ======================================

export const saveMarks = async (req, res) => {
  try {
    const teacher = req.teacher;

    const {
      student,
      subject,
      examName,
      marksObtained,
      totalMarks,
    } = req.body;

    // Validation
    if (
      !student ||
      !subject ||
      !examName ||
      marksObtained === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Duplicate Check
    const existingMark = await Mark.findOne({
      student,
      subject,
      examName,
    });

    if (existingMark) {
      return res.status(400).json({
        success: false,
        message: "Marks already added for this exam",
      });
    }

    // Save
    const mark = await Mark.create({
      teacher: teacher._id,
      student,
      subject,
      className: teacher.className,
      section: teacher.section,
      examName,
      marksObtained,
      totalMarks,
    });

    res.status(201).json({
      success: true,
      message: "Marks saved successfully",
      data: mark,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Get Teacher Marks
// ======================================

export const getTeacherMarks = async (req, res) => {
  try {
    const teacher = req.teacher;

    const marks = await Mark.find({
      className: teacher.className,
      section: teacher.section,
    })
      .populate(
        "student",
        "firstName lastName rollNumber"
      )
      .populate(
        "subject",
        "subjectName"
      )
      .sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      count: marks.length,
      data: marks,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Delete Marks
// ======================================

export const deleteMark = async (req, res) => {
  try {

    const mark = await Mark.findById(req.params.id);

    if (!mark) {
      return res.status(404).json({
        success: false,
        message: "Mark not found",
      });
    }

    await mark.deleteOne();

    res.status(200).json({
      success: true,
      message: "Mark deleted successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Student Marks
// ======================================

export const getStudentMarks = async (req, res) => {

  try {

    const marks = await Mark.find({
      student: req.student._id,
    })
      .populate(
        "subject",
        "subjectName subjectCode"
      )
      .sort({
        createdAt: -1,
      });

    const result = marks.map((item) => ({

      _id: item._id,

      subject: item.subject,

      examName: item.examName,

      marksObtained: item.marksObtained,

      totalMarks: item.totalMarks,

      percentage: (
        (item.marksObtained / item.totalMarks) *
        100
      ).toFixed(2),

    }));

    res.status(200).json({
      success: true,
      count: result.length,
      data: result,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
