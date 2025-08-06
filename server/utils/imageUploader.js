const cloudinary = require('cloudinary').v2;
exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  const options = { folder };

  if (height) {
    options.height = height;
  }
  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto";

  return await cloudinary.uploader.upload(file.tempFilePath, options);
};

exports.uploadVideoToCloudinary = async (file, folder) => {
  try {
    const options = {
      folder: folder,
      resource_type: "video", // important for video
    };

    const uploadResult = await cloudinary.uploader.upload(file.tempFilePath, options);
    return uploadResult;
  } catch (error) {
    console.error("Cloudinary video upload error:", error);
    throw error;
  }
};