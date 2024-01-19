const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY,
});

const uploadSingleImageToCloudinary = async (req, res, next) => {
  try {
    if (!req.file) {
      req.uploadedImageUrl = undefined;
      next();
      return null;
    }

    const dataUrl = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;
    const result = await cloudinary.uploader.upload(dataUrl);

    req.uploadedImageUrl = result.secure_url;

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = uploadSingleImageToCloudinary;
