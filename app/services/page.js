"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaArrowRight } from "react-icons/fa";

// Simplified subtle animation component - replaces FloatingEmoji
const SubtleDecoration = ({ delay = 0 }) => {
  return (
    <motion.div
      className="absolute w-10 h-10 rounded-full bg-white/10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.3, 0],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        delay,
        repeat: Infinity,
        repeatDelay: 5,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${80 + Math.random() * 20}%`,
      }}
    />
  );
};

export default function Services() {
  const [activeTab, setActiveTab] = useState("residential");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  // Service categories and details
  const services = {
    residential: [
      {
        title: "Custom Home Builds",
        description:
          "Your dream home from the ground up. We build spaces that are functional, aesthetic, and uniquely YOU.",
        image: "/Custom Home.jpg",
        features: [
          "Personalized design consultation",
          "Energy-efficient options",
          "Smart home integration",
          "Premium finishes",
        ],
      },
      {
        title: "Interior Redesigns",
        description:
          "Major glow-up for your space. We transform boring rooms into Instagram-worthy spots.",
        image: "/Interior.jpg",
        features: [
          "Color scheme development",
          "Furniture selection",
          "Accent features",
          "Lighting design",
        ],
      },
      {
        title: "Home Extensions",
        description:
          "Need more space? We'll size up your home with seamless additions.",
        image: "/Home.jpg",
        features: [
          "Matching architectural style",
          "Minimal disruption",
          "Permit handling",
          "Budget-friendly options",
        ],
      },
    ],
    commercial: [
      {
        title: "Retail Spaces",
        description:
          "We create stores designed to showcase your brand and give customers the ultimate shopping experience.",
        image: "/Retail.jpg",
        features: [
          "Brand-aligned design",
          "Customer flow optimization",
          "Display areas",
          "Experience-focused layouts",
        ],
      },
      {
        title: "Office Renovations",
        description:
          "Modern, creative environments where ideas can flow and productivity thrives.",
        image: "/office.jpg",
        features: [
          "Collaborative spaces",
          "Ergonomic design",
          "Acoustic solutions",
          "Wellness features",
        ],
      },
      {
        title: "Restaurant Designs",
        description:
          "Dining spaces with character. We build restaurants that serve vibes alongside the menu.",
        image: "/Restaurant Designs.jpg",
        features: [
          "Atmosphere creation",
          "Kitchen efficiency",
          "Seating optimization",
          "Instagram-worthy details",
        ],
      },
    ],
    renovation: [
      {
        title: "Kitchen Renovations",
        description:
          "Transform outdated kitchens into culinary spaces you'll love.",
        image: "/Interior.jpg",
        features: [
          "Custom cabinetry",
          "Island designs",
          "Premium appliances",
          "Sustainable options",
        ],
      },
      {
        title: "Bathroom Transformations",
        description:
          "Spa-worthy bathroom makeovers that feel like a personal sanctuary.",
        image: "/Home.jpg",
        features: [
          "Luxury fixtures",
          "Tile design",
          "Storage solutions",
          "Water-saving features",
        ],
      },
      {
        title: "Full Home Refreshes",
        description:
          "We take what's outdated and make it modern from floor to ceiling.",
        image: "/Custom Home.jpg",
        features: [
          "Cohesive design vision",
          "Structural improvements",
          "Modern updates",
          "Energy efficiency upgrades",
        ],
      },
    ],
  };

  // Add the new services data
  const additionalServices = [
    {
      title: "Interior Design",
      description:
        "Transform your space with our expert interior design services. We blend aesthetics with functionality to create spaces that reflect your personality and lifestyle.",
      features: [
        "Custom furniture design",
        "Color consulting",
        "Space planning",
        "Material selection",
      ],
    },
    {
      title: "Consulting",
      description:
        "Get professional advice on your construction and design projects. Our consulting services help you make informed decisions and avoid costly mistakes.",
      features: [
        "Budget planning",
        "Material recommendations",
        "Design validation",
        "Construction feasibility",
      ],
    },
    {
      title: "Project Management",
      description:
        "We handle all aspects of your project from start to finish, ensuring everything runs smoothly, on time, and within budget.",
      features: [
        "Timeline management",
        "Contractor coordination",
        "Quality control",
        "Budget tracking",
      ],
    },
    {
      title: "Civil Construction",
      description:
        "From foundation to finishing, our civil construction services deliver structures that are built to last with precision and quality craftsmanship.",
      features: [
        "Residential buildings",
        "Commercial structures",
        "Foundation work",
        "Structural engineering",
      ],
    },
    {
      title: "Home Renovation",
      description:
        "Breathe new life into your existing space with our renovation services that combine modern techniques with timeless design principles.",
      features: [
        "Kitchen remodeling",
        "Bathroom upgrades",
        "Living space expansions",
        "Energy-efficient retrofits",
      ],
    },
    {
      title: "Architectural 3D Visualization",
      description:
        "See your project before it's built with our photorealistic 3D visualization services that help you make design decisions with confidence.",
      features: [
        "Exterior renderings",
        "Interior visualizations",
        "Virtual walkthroughs",
        "Design iterations",
      ],
    },
    {
      title: "Site Supervision & Labour Management",
      description:
        "Our experienced team ensures that construction proceeds according to plan, with proper supervision and efficient labor management.",
      features: [
        "Quality assurance",
        "Safety compliance",
        "Schedule adherence",
        "Resource optimization",
      ],
    },
  ];

  // Reduced number of animation elements
  const decorationElements = [1, 2, 3];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] relative">
      {/* Cursor follower - simplified and reduced opacity */}
      {!isMobile && (
        <motion.div
          className="fixed w-20 h-20 rounded-full bg-gradient-to-r from-[#4CC9F0] to-[#F72585] opacity-5 pointer-events-none z-0 blur-lg"
          animate={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Background grid */}
      <div
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(#3A0CA3 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section - with improved contrast and reduced animations */}
      <section className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-[#3A0CA3] via-[#4361EE] to-[#3A0CA3] flex items-center overflow-hidden">
        {/* Reduced abstract shapes */}
        <motion.div
          className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-[#4CC9F0] rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            className="inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white drop-shadow-lg inline-block relative">
              Our{" "}
              <span className="bg-gradient-to-r from-[#FFFFFF] to-[#FCBF49] text-transparent bg-clip-text">
                Services
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-[#FCBF49] to-[#FFFFFF] text-transparent bg-clip-text">
                Solutions
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We don't just build — we{" "}
            <span className="inline-block bg-white text-[#3A0CA3] font-black px-1">
              create spaces
            </span>{" "}
            that truly reflect your vision.
          </motion.p>
        </div>

        {/* Simplified decorations instead of emojis */}
        {decorationElements.map((item, index) => (
          <SubtleDecoration key={index} delay={index * 1.5} />
        ))}
      </section>

      {/* Service Categories Tabs */}
      <section id="services-list" className="py-16 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F3F4F6] to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-[#F72585] text-white text-sm font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-3 transform -rotate-1">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 text-[#1F2937]">
                Choose Your{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#F72585] to-[#4CC9F0] text-transparent bg-clip-text">
                    Vibe
                  </span>
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                Select the category that matches your project goals. Our team
                delivers exceptional results across all service areas.
              </p>
            </motion.div>
          </div>

          {/* Category Selector */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 relative group ${
                activeTab === "residential"
                  ? "bg-[#4CC9F0] text-white shadow-lg shadow-[#4CC9F0]/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span>Residential</span>
              {activeTab === "residential" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#4CC9F0] rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 relative group ${
                activeTab === "commercial"
                  ? "bg-[#F72585] text-white shadow-lg shadow-[#F72585]/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span>Commercial</span>
              {activeTab === "commercial" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#F72585] rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("renovation")}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 relative group ${
                activeTab === "renovation"
                  ? "bg-[#7209B7] text-white shadow-lg shadow-[#7209B7]/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span>Renovation</span>
              {activeTab === "renovation" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#7209B7] rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </button>
          </motion.div>

          {/* Service Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {services[activeTab].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-3 right-3 bg-[#3A0CA3] text-white text-xs font-bold py-1 px-3 rounded-full z-10">
                    {activeTab === "residential" && "Home Design"}
                    {activeTab === "commercial" && "Commercial"}
                    {activeTab === "renovation" && "Renovation"}
                  </div>

                  <div className="h-56 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-extrabold mb-3 text-[#1F2937] group-hover:text-[#3A0CA3] transition-colors duration-300">
                      {service.title.replace(/\s[^\s]+$/, "")}
                    </h3>
                    <p className="text-gray-600 mb-5">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#3A0CA3] flex items-center justify-center text-white">
                            <FaCheck size={10} />
                          </div>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="inline-flex items-center font-bold bg-gradient-to-r from-[#4361EE] to-[#4361EE] bg-clip-text text-transparent hover:from-[#F72585] hover:to-[#F72585] transition-all duration-300 group"
                      >
                        <span>Get more details</span>
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </motion.svg>
                      </Link>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#F72585] to-[#4CC9F0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Add new section before the FAQ section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-bold text-[#3A0CA3] uppercase tracking-wider px-3 py-1 bg-[#3A0CA3]/10 rounded-full">
              Comprehensive Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6">
              Services{" "}
              <span className="bg-gradient-to-r from-[#F72585] to-[#4361EE] text-transparent bg-clip-text ml-2">
                Provided
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a complete range of design and construction services to
              bring your vision to reality, all under one roof.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#3A0CA3] text-white rounded-xl flex items-center justify-center font-bold text-xl">
                      {service.title.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold ml-4 text-[#1F2937]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="mt-1 text-[#F72585]">
                          <FaCheck size={12} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-1 w-full bg-[#3A0CA3]"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#4361EE] to-[#F72585] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Custom Quote</span>
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Team Profile Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F3F4F6]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-bold text-[#3A0CA3] uppercase tracking-wider px-3 py-1 bg-[#3A0CA3]/10 rounded-full">
              Meet Our Team
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6">
              The Experts{" "}
              <span className="bg-gradient-to-r from-[#F72585] to-[#4361EE] text-transparent bg-clip-text">
                Behind Your Vision
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#3A0CA3] rounded-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-xl">
                  <Image
                    src="/profile.jpg"
                    alt="Team Profile"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white font-bold text-lg">
                      DREAMHOUSE DESIGN TEAM
                    </p>
                    <p className="text-white/80">
                      Creating spaces that inspire since 2012
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#1F2937]">
                Why Choose DREAMHOUSE DESIGN?
              </h3>
              <p className="mb-4 text-gray-600">
                At DREAMHOUSE DESIGN, we combine creativity with technical
                expertise to deliver exceptional architectural designs and
                construction solutions. Our team of experienced professionals is
                dedicated to turning your vision into reality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-[#F72585]">
                    <FaCheck size={14} />
                  </div>
                  <p className="text-gray-700">
                    15+ years of industry experience
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-[#F72585]">
                    <FaCheck size={14} />
                  </div>
                  <p className="text-gray-700">Attention to every detail</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-[#F72585]">
                    <FaCheck size={14} />
                  </div>
                  <p className="text-gray-700">Transparent communication</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-[#F72585]">
                    <FaCheck size={14} />
                  </div>
                  <p className="text-gray-700">Quality craftsmanship</p>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center bg-[#3A0CA3] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#F72585] transition-all duration-300"
              >
                <span>Learn More About Us</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
