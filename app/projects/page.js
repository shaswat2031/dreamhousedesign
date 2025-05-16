"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedGallery from "../components/FeaturedGallery";

// Custom CSS for scrolling animations
const scrollStyles = {
  ".animate-scroll-left": {
    animation: "scroll-left 60s linear infinite",
  },
  ".animate-scroll-right": {
    animation: "scroll-right 60s linear infinite",
  },
  "@keyframes scroll-left": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-100%)" },
  },
  "@keyframes scroll-right": {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(0)" },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const modalRef = useRef(null);

  // Add state for fullscreen image view
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [showFullscreen, setShowFullscreen] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const response = await fetch("/api/projects");

        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  useEffect(() => {
    // Handle click outside of modal to close it
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset"; // Re-enable scrolling
  };

  // Function to open fullscreen image
  const openFullscreenImage = (event, imageSrc) => {
    event.stopPropagation(); // Prevent triggering parent click events
    setFullscreenImage(imageSrc);
    setShowFullscreen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  // Function to close fullscreen image
  const closeFullscreenImage = () => {
    setShowFullscreen(false);
    document.body.style.overflow = "unset"; // Re-enable scrolling
  };

  // Simplified animation variants with reduced motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
      `}</style>
      {/* Navigation */}
      <Navbar />
      {/* Hero Section - Simplified with reduced animations and no emojis */}
      <section className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-[#4361EE] via-[#3A0CA3] to-[#7209B7] flex items-center overflow-hidden">
        {/* Simplified background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-[#F72585] rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-80 h-80 bg-[#4CC9F0] rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] bg-repeat mix-blend-overlay"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-black mb-6 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#E4FF1A] to-[#FCBF49] text-transparent bg-clip-text">
              Latest
            </span>{" "}
            Projects
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Check out our transformations and creative spaces
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#project-gallery"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white/20 flex items-center gap-2"
            >
              <span>Browse Gallery</span>
              <span className="ml-1">→</span>
            </a>
          </motion.div>
        </div>
      </section>{" "}
      {/* Horizontal Scrolling Image Gallery */}
      <section className="py-12 overflow-hidden bg-white">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Project Showcase
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Scroll through our latest work
          </p>
        </div>

        <div className="relative">
          {/* First row - scrolling left */}
          <div className="flex gap-4 animate-scroll-left">
            <div className="flex gap-4">
              {[
                "/Custom Home.jpg",
                "/Desai House.jpg",
                "/MAALI  HOUSE.jpg",
                "/Tiny House.jpg",
                "/Restaurant Designs.jpg",
                "/Retail.jpg",
              ].map((img, index) => (
                <div
                  key={`left-${index}`}
                  className="h-60 w-80 flex-shrink-0 overflow-hidden rounded-xl cursor-pointer relative group"
                  onClick={(e) => openFullscreenImage(e, img)}
                >
                  <Image
                    src={img}
                    alt={`Project image ${index}`}
                    width={320}
                    height={240}
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-4">
              {[
                "/Custom Home.jpg",
                "/Desai House.jpg",
                "/MAALI  HOUSE.jpg",
                "/Tiny House.jpg",
                "/Restaurant Designs.jpg",
                "/Retail.jpg",
              ].map((img, index) => (
                <div
                  key={`left-dup-${index}`}
                  className="h-60 w-80 flex-shrink-0 overflow-hidden rounded-xl cursor-pointer relative group"
                  onClick={(e) => openFullscreenImage(e, img)}
                >
                  <Image
                    src={img}
                    alt={`Project image ${index}`}
                    width={320}
                    height={240}
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - scrolling right */}
          <div className="flex gap-4 mt-4 animate-scroll-right">
            <div className="flex gap-4">
              {[
                "/Sun temple.jpg",
                "/Interior.jpg",
                "/Kitchen_Renovation.jpg",
                "/Bathroom_Renovation.jpg",
                "/Full_Home_Renovation.jpg",
                "/office.jpg",
              ].map((img, index) => (
                <div
                  key={`right-${index}`}
                  className="h-60 w-80 flex-shrink-0 overflow-hidden rounded-xl cursor-pointer relative group"
                  onClick={(e) => openFullscreenImage(e, img)}
                >
                  <Image
                    src={img}
                    alt={`Project image ${index}`}
                    width={320}
                    height={240}
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-4">
              {[
                "/Sun temple.jpg",
                "/Interior.jpg",
                "/Kitchen_Renovation.jpg",
                "/Bathroom_Renovation.jpg",
                "/Full_Home_Renovation.jpg",
                "/office.jpg",
              ].map((img, index) => (
                <div
                  key={`right-dup-${index}`}
                  className="h-60 w-80 flex-shrink-0 overflow-hidden rounded-xl cursor-pointer relative group"
                  onClick={(e) => openFullscreenImage(e, img)}
                >
                  <Image
                    src={img}
                    alt={`Project image ${index}`}
                    width={320}
                    height={240}
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlay on sides */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </section>
      {/* Project Gallery Section */}
      <section id="project-gallery" className="py-20 bg-[#FAFAFA] relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>

        <div className="container mx-auto px-4">
          {/* Filter tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-[#3A0CA3] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter("residential")}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeFilter === "residential"
                  ? "bg-[#F72585] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveFilter("commercial")}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeFilter === "commercial"
                  ? "bg-[#4CC9F0] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setActiveFilter("heritage")}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeFilter === "heritage"
                  ? "bg-[#7209B7] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Heritage
            </button>
          </div>

          {/* Loading state */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4361EE]"></div>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="text-center py-20">
              <div className="text-red-500 text-xl font-bold mb-4">{error}</div>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Retry
              </button>
            </div>
          )}

          {/* Projects grid - Only show when not loading and no errors */}
          {!loading && !error && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                    onClick={() => openModal(project)}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-64 relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                      <div className="absolute bottom-4 right-4 flex gap-1">
                        {project.tags &&
                          project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-white/80 backdrop-blur-sm text-xs font-bold py-1 px-2 rounded-full text-black"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-extrabold mb-1 text-[#1F2937] group-hover:text-[#4361EE] transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                        <span>{project.location}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{project.year}</span>
                        {project.timeToComplete && (
                          <>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span>{project.timeToComplete}</span>
                          </>
                        )}
                      </div>
                      <p className="text-gray-600 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {!loading && !error && filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-700">
                  No projects found
                </h3>
                <p className="text-gray-500 mt-2">
                  Try selecting a different category
                </p>
              </motion.div>
            </div>
          )}
        </div>
      </section>
      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors"
                aria-label="Close modal"
              >
                ×
              </button>

              <div className="h-64 sm:h-80 relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <span>{selectedProject.location}</span>
                    <span className="w-1 h-1 bg-white/80 rounded-full"></span>
                    <span>{selectedProject.year}</span>
                    {selectedProject.timeToComplete && (
                      <>
                        <span className="w-1 h-1 bg-white/80 rounded-full"></span>
                        <span>{selectedProject.timeToComplete}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#4361EE]/10 text-[#4361EE] text-xs font-bold py-1 px-3 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 mb-8">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[#1F2937]">
                      The Challenge
                    </h4>
                    <p className="text-gray-600">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[#1F2937]">
                      Our Solution
                    </h4>
                    <p className="text-gray-600">{selectedProject.solution}</p>
                  </div>
                </div>

                {selectedProject.scope && (
                  <div className="mb-8">
                    <h4 className="font-bold text-lg mb-2 text-[#1F2937]">
                      Scope of the Project
                    </h4>
                    <p className="text-gray-600">{selectedProject.scope}</p>
                  </div>
                )}

                {selectedProject.role && (
                  <div className="mb-8">
                    <h4 className="font-bold text-lg mb-2 text-[#1F2937]">
                      Our Role
                    </h4>
                    <p className="text-gray-600">{selectedProject.role}</p>
                  </div>
                )}

                {selectedProject.achievements && (
                  <div className="mb-8">
                    <h4 className="font-bold text-lg mb-2 text-[#1F2937]">
                      Key Achievements
                    </h4>
                    <p className="text-gray-600">
                      {selectedProject.achievements}
                    </p>
                  </div>
                )}

                <h4 className="font-bold text-lg mb-4 text-[#1F2937]">
                  Project Gallery
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {selectedProject.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="rounded-xl overflow-hidden h-40 relative cursor-pointer group"
                      onClick={(e) => openFullscreenImage(e, img)}
                    >
                      <Image
                        src={img}
                        alt={`${selectedProject.title} detail ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#4361EE]/10 to-[#7209B7]/10 p-6 rounded-2xl relative">
                  <p className="text-gray-700 italic mb-4">
                    "{selectedProject.testimonial.quote}"
                  </p>
                  <p className="font-bold text-[#1F2937]">
                    - {selectedProject.testimonial.author}
                  </p>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-between items-center">
                <Link
                  href="/contact"
                  className="text-[#4361EE] font-bold hover:text-[#F72585] transition-colors"
                >
                  Start your project →
                </Link>

                <button
                  onClick={closeModal}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {showFullscreen && fullscreenImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeFullscreenImage}
          >
            <button
              onClick={closeFullscreenImage}
              className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
              aria-label="Close fullscreen image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <motion.div
              className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-auto">
                <Image
                  src={fullscreenImage}
                  alt="Fullscreen image"
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  unoptimized={true}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 text-white/80">
                <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  Click outside to close
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Featured Gallery Component */}
      <FeaturedGallery />
      {/* Call to Action - Simplified */}
      <section className="py-16 bg-gradient-to-r from-[#4361EE] to-[#3A0CA3] relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
              Ready to Create Your Own Success Story?
            </h2>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's turn your dream space into reality. Our team is ready to
              bring your vision to life.
            </p>

            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-[#3A0CA3] font-bold py-4 px-8 rounded-full transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
