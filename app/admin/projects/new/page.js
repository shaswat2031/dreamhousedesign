"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { uploadImage } from "../../../../lib/cloudinary";

export default function NewProject() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [mainImageFile, setMainImageFile] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [galleryPreviews, setGalleryPreviews] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "residential",
    location: "",
    year: new Date().getFullYear().toString(),
    image: "",
    description: "",
    tags: "",
    gallery: [],
    challenge: "",
    solution: "",
    testimonial: {
      quote: "",
      author: "",
    },
    timeToComplete: "",
    scope: "",
    role: "",
    achievements: "",
  });

  // Handle main image selection
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImageFile(file);
      setMainImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle gallery images selection
  const handleGalleryImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setGalleryFiles((prevFiles) => [...prevFiles, ...files]);

      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setGalleryPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
    }
  };

  // Remove a gallery image
  const removeGalleryImage = (index) => {
    setGalleryFiles(galleryFiles.filter((_, i) => i !== index));
    setGalleryPreviews(galleryPreviews.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Upload main image
      let mainImageUrl = "";
      if (mainImageFile) {
        const uploadResult = await uploadImage(mainImageFile);
        mainImageUrl = uploadResult.secure_url;
      }

      // Upload gallery images
      const galleryUrls = [];
      for (const file of galleryFiles) {
        const uploadResult = await uploadImage(file);
        galleryUrls.push(uploadResult.secure_url);
      }

      // Prepare project data
      const projectData = {
        ...formData,
        image: mainImageUrl,
        gallery: galleryUrls,
        tags: formData.tags.split(",").map((tag) => tag.trim()),
      };

      // Submit to API
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      // Redirect to projects page on success
      router.push("/admin/projects");
    } catch (err) {
      console.error("Error creating project:", err);
      setError(err.message || "Failed to create project. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clean up object URLs on unmount
  useEffect(() => {
    return () => {
      if (mainImagePreview) URL.revokeObjectURL(mainImagePreview);
      galleryPreviews.forEach((preview) => URL.revokeObjectURL(preview));
    };
  }, [mainImagePreview, galleryPreviews]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Link
          href="/admin/projects"
          className="mr-4 text-gray-500 hover:text-gray-700"
        >
          <FaArrowLeft />
        </Link>
        <h1 className="text-2xl font-semibold text-gray-800">
          Add New Project
        </h1>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Basic Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Basic Information
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Project Title *
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="institutional">Institutional</option>
                  <option value="renovation">Renovation</option>
                  <option value="interior">Interior Design</option>
                  <option value="landscape">Landscape</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Location *
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
                />
              </div>

              <div>
                <label
                  htmlFor="year"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Year *
                </label>
                <input
                  id="year"
                  name="year"
                  type="number"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
                />
              </div>

              <div>
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tags (comma separated)
                </label>
                <input
                  id="tags"
                  name="tags"
                  type="text"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="e.g., modern, sustainable, luxury"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
                />
              </div>
            </div>
          </div>

          {/* Main Image Upload */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Main Project Image
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                {mainImagePreview ? (
                  <div className="relative h-48 mb-4">
                    <Image
                      src={mainImagePreview}
                      alt="Project preview"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setMainImageFile(null);
                        setMainImagePreview("");
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div className="py-10">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H8m36-12h-4m4 0H20"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-500">
                      Click to upload or drag and drop
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
                <input
                  id="mainImage"
                  name="mainImage"
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageChange}
                  className={
                    mainImagePreview
                      ? "hidden"
                      : "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Project Description
          </h2>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
            placeholder="Provide a detailed description of the project..."
          ></textarea>
        </div>

        {/* Gallery Images */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Project Gallery
          </h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <input
              id="galleryImages"
              name="galleryImages"
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalleryImagesChange}
              className="hidden"
            />
            <label htmlFor="galleryImages" className="cursor-pointer block">
              <div className="py-10">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H8m36-12h-4m4 0H20"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-500">
                  Click to upload multiple images
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB each
                </p>
              </div>
            </label>

            {galleryPreviews.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {galleryPreviews.map((preview, index) => (
                  <div key={index} className="relative h-32">
                    <Image
                      src={preview}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeGalleryImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Challenge & Solution
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="challenge"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Project Challenge
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
                  placeholder="What challenges did this project present?"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="solution"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Our Solution
                </label>
                <textarea
                  id="solution"
                  name="solution"
                  value={formData.solution}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
                  placeholder="How did we solve these challenges?"
                ></textarea>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Project Metrics
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="timeToComplete"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Time to Complete
                </label>
                <input
                  id="timeToComplete"
                  name="timeToComplete"
                  type="text"
                  value={formData.timeToComplete}
                  onChange={handleChange}
                  placeholder="e.g., 8 months"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
                />
              </div>

              <div>
                <label
                  htmlFor="scope"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Project Scope
                </label>
                <input
                  id="scope"
                  name="scope"
                  type="text"
                  value={formData.scope}
                  onChange={handleChange}
                  placeholder="e.g., Full home renovation, 3000 sq ft"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Our Role
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g., Lead Architect, Interior Design"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Client Testimonial
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="testimonial.quote"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Testimonial Quote
              </label>
              <textarea
                id="testimonial.quote"
                name="testimonial.quote"
                value={formData.testimonial.quote}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
                placeholder="What did the client say about this project?"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="testimonial.author"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Client Name
              </label>
              <input
                id="testimonial.author"
                name="testimonial.author"
                type="text"
                value={formData.testimonial.author}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
                placeholder="e.g., John Smith, Homeowner"
              />
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <Link
            href="/admin/projects"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 bg-[#4361EE] text-white rounded-md hover:bg-[#3A0CA3] transition-colors ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Creating..." : "Create Project"}
          </button>
        </div>
      </form>
    </div>
  );
}
