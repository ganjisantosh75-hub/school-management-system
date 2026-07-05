import Gallery from "../models/Gallery.js";

// ==============================
// Create Gallery Item
// ==============================

export const createGallery = async (req, res) => {
  try {

    const { title, category, eventDate, description } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload an image",
      });
    }

    const gallery = await Gallery.create({
      title,
      category,
      eventDate,
      description,
      image: req.file.path,
    });

    res.status(201).json({
      success: true,
      message: "Gallery Item Added Successfully",
      data: gallery,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get All Gallery Items
// ==============================

export const getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: gallery.length,
      data: gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get Single Gallery Item
// ==============================

export const getGalleryItem = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Update Gallery Item
// ==============================

export const updateGallery = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      category: req.body.category,
      eventDate: req.body.eventDate,
      description: req.body.description,
    };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const gallery = await Gallery.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Gallery Item Updated Successfully",
      data: gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Delete Gallery Item
// ==============================

export const deleteGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndDelete(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Gallery Item Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};