import CloudinaryImage from "@/components/CloudinaryImage";

/**
 * Upload an image file to Cloudinary via our API route
 * @param {File} file - The file to upload
 * @returns {Promise<Object>} - The Cloudinary upload response
 */
export async function uploadImage(file) {
  // Create FormData to send the file
  const formData = new FormData();
  formData.append("file", file);

  try {
    // Use our API route instead of direct Cloudinary API
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    // Get detailed error information if available
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("Upload API error:", errorData || response.statusText);
      throw new Error(
        `Image upload failed: ${errorData?.error || response.statusText}`
      );
    }

    const data = await response.json();
    console.log("Upload successful:", data.secure_url);
    return data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

/**
 * Get a cloudinary URL with transformations
 * @param {string} publicId - Cloudinary public ID
 * @param {Object} options - Transformation options
 * @returns {string} - Transformed URL
 */
export function getCloudinaryUrl(publicId, options = {}) {
  const {
    width = null,
    height = null,
    crop = "fill",
    quality = "auto",
    format = "auto",
  } = options;

  let transformations = [];

  if (width || height) {
    transformations.push(`c_${crop}`);
    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
  }

  transformations.push(`q_${quality}`);
  transformations.push(`f_${format}`);

  const transformationString = transformations.join(",");

  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${transformationString}/${publicId}`;
}

/**
 * Example usage:
 *
 * // For fill images (like in the modal or project cards)
 * // <div className="h-64 relative overflow-hidden">
 * //   <CloudinaryImage
 * //     publicId={project.image}
 * //     fill={true}
 * //     sizes="(max-width: 768px) 100vw, 50vw"
 * //     alt={project.title}
 * //     className="object-cover transition-transform duration-500 group-hover:scale-105"
 * //   />
 * // </div>
 *
 * // For regular images with specific dimensions
 * // <CloudinaryImage
 * //   publicId={project.image}
 * //   width={600}
 * //   height={400}
 * //   alt={project.title}
 * //   className="rounded-lg"
 * // />
 */
