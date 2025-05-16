// Server-side Cloudinary utilities
// This file can use Node.js modules as it will only run on the server

import { v2 as cloudinary } from "cloudinary";

// Configure cloudinary with environment variables
cloudinary.config({
  cloud_name:
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
    process.env.CLOUDINARY_CLOUD_NAME,
  api_key:
    process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY ||
    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

/**
 * Upload an image from a path to Cloudinary (server-side only)
 * @param {string} imagePath - Path to the image file
 * @param {Object} options - Upload options
 * @returns {Promise<Object>} Cloudinary upload result
 */
export async function uploadImageFromPath(imagePath, options = {}) {
  try {
    const uploadOptions = {
      folder: options.folder || "dreamhouse",
      ...options,
    };

    const result = await cloudinary.uploader.upload(imagePath, uploadOptions);
    return result;
  } catch (error) {
    console.error(`Error uploading ${imagePath} to Cloudinary:`, error);
    throw error;
  }
}

/**
 * Delete an image from Cloudinary by public_id
 * @param {string} publicId - The public ID of the image
 * @returns {Promise<Object>} Cloudinary deletion result
 */
export async function deleteImage(publicId) {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error(`Error deleting image ${publicId} from Cloudinary:`, error);
    throw error;
  }
}
