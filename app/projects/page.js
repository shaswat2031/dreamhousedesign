"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Project data - Only the three house projects
  const projects = [
    {
      id: 1,
      title: "Tiny House",
      category: "residential",
      location: "Amroli",
      year: "2022",
      image: "/tiny-house.jpg",
      description:
        'This is the smallest house we have designed, built precisely to meet the client\'s compact requirements. The house includes 3 bedrooms with attached bathrooms, a standing balcony, a living room, and a compact kitchen smartly placed beneath the staircase. It is our first small-scale project, hence the name "Tiny House".',
      tags: ["Compact", "Space-Efficient", "Modern"],
      gallery: ["/tiny-house-1.jpg", "/tiny-house-2.jpg", "/tiny-house-3.jpg"],
      challenge:
        "Creating a fully functional 3-bedroom home with all amenities in a limited space without compromising on comfort or aesthetics.",
      solution:
        "We implemented innovative space optimization techniques such as placing the kitchen beneath the staircase, designing multi-functional areas, and using smart storage solutions throughout the home.",
      testimonial: {
        quote:
          "We never thought our small plot could accommodate so much functionality. DreamHouse Design understood our needs perfectly and created a home that feels spacious despite its compact size.",
        author: "Tiny House Client",
      },
      timeToComplete: "3 Months",
      scope:
        "Design and execution of a fully functional, compact residential home with space optimization and personalized architecture.",
      role: "We worked closely with the client to understand their minimal yet practical requirements and turned their dream into reality.",
      achievements:
        "The client and their family were extremely satisfied. Neighbors and the community also appreciated our innovative small-space design.",
    },
    {
      id: 2,
      title: "DESAI HOUSE",
      category: "residential",
      location: "Mota Varachha, Surat",
      year: "2021",
      image: "/desai-house.jpg",
      description:
        "A luxurious multi-floor residence designed with modern architectural aesthetics, featuring spacious bedrooms, designer interiors, and advanced construction techniques.",
      tags: ["Luxury", "Multi-floor", "Modern"],
      gallery: [
        "/desai-house-1.jpg",
        "/desai-house-2.jpg",
        "/desai-house-3.jpg",
      ],
      challenge:
        "Creating a premium residential property that balances luxury with functionality while incorporating modern design elements and construction techniques.",
      solution:
        "We developed a comprehensive architectural plan that maximized space utilization, incorporated high-end materials, and implemented advanced construction methods to ensure durability and aesthetic appeal.",
      testimonial: {
        quote:
          "The DreamHouse team delivered beyond our expectations. Our home is not just beautiful but also perfectly functional for our lifestyle. The attention to detail is impressive.",
        author: "Desai Family",
      },
      timeToComplete: "2 Years",
      scope:
        "Complete architectural planning, structural development, and project execution from foundation to finishing.",
      role: "Led the entire project — from blueprint designing, team coordination, to material sourcing and execution oversight.",
      achievements:
        "Delivered a premium-quality home that exceeded client expectations; featured in a local architectural showcase.",
    },
    {
      id: 3,
      title: "MAALI HOUSE",
      category: "residential",
      location: "Mota Varachha, Surat",
      year: "2020",
      image: "/maali-house.jpg",
      description:
        "A custom-designed residence reflecting both elegance and functionality, crafted to suit the client's family lifestyle and preferences.",
      tags: ["Custom", "Elegant", "Family-oriented"],
      gallery: [
        "/maali-house-1.jpg",
        "/maali-house-2.jpg",
        "/maali-house-3.jpg",
      ],
      challenge:
        "Designing a home that perfectly balances the family's needs for both shared spaces and private areas, with special attention to ventilation and durability.",
      solution:
        "We created a design that incorporated ample natural light, strategic room placement for optimal ventilation, and durable materials that would stand the test of time while maintaining aesthetic appeal.",
      testimonial: {
        quote:
          "DreamHouse understood exactly what our family needed. The home they designed fits our lifestyle perfectly, and the quality of construction is excellent. We've already recommended them to several friends.",
        author: "Maali Family",
      },
      timeToComplete: "1.5 Years",
      scope:
        "Full-scale design, civil construction, and interior coordination. Emphasis on ventilation, space, and durability.",
      role: "Directly handled the design-to-delivery process, collaborating with subcontractors and managing quality control.",
      achievements:
        "Earned repeated business and referrals from the satisfied client. Commended for timely delivery and outstanding craftsmanship.",
    },
  ];

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
      </section>

      {/* Project Gallery Section */}
      <section id="project-gallery" className="py-20 bg-[#FAFAFA] relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>

        <div className="container mx-auto px-4">
          {/* Filter tabs - Removed emojis */}

          {/* Projects grid - Simplified animations */}
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
                      {project.tags.map((tag, index) => (
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

          {filteredProjects.length === 0 && (
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

      {/* Project Detail Modal - Simplified with enhanced project details */}
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

                {/* Additional project details for the new projects */}
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

                {/* Project gallery */}
                <h4 className="font-bold text-lg mb-4 text-[#1F2937]">
                  Project Gallery
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {selectedProject.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="rounded-xl overflow-hidden h-40 relative"
                    >
                      <Image
                        src={img}
                        alt={`${selectedProject.title} detail ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
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
