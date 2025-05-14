"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import {
  FaRegCalendarAlt,
  FaRegBuilding,
  FaRegMap,
  FaShieldAlt,
  FaPhone,
} from "react-icons/fa";

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const emailAddress = "Dreamhousedesign.2017@gmail.com";
  const truncatedEmail = "Dreamhouse...@gmail.com";

  // Intersection Observer for animations
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // 50% of the element must be in view before triggering animation
  });

  useEffect(() => {
    // Handle scroll animation
    if (inView) {
      setHasScrolled(true);
    }

    // Handle responsive behavior
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, [inView]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-[#3A0CA3] via-[#4361EE] to-[#4CC9F0] flex items-center overflow-hidden">
        {/* Abstract patterns */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#F72585] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7209B7] rounded-full blur-3xl"></div>
        </div>

        {/* Image overlay with modern filter */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
          <div className="w-full h-full bg-[url('/hero-house.jpg')] bg-cover bg-center filter saturate-150"></div>
        </div>

        {/* Animated shapes */}
        <div className="absolute w-full h-full overflow-hidden z-0">
          <div className="absolute top-[20%] left-[10%] w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full animate-float"></div>
          <div
            className="absolute top-[70%] right-[15%] w-32 h-32 bg-white/10 backdrop-blur-sm rounded-xl rotate-45 animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 z-10 max-w-4xl text-white">
          <h2 className="text-5xl md:text-6xl font-black mb-4 leading-tight tracking-wide drop-shadow-lg">
            <span className="bg-gradient-to-r from-[#F72585] via-[#FFFFFF] to-[#4CC9F0] text-transparent bg-clip-text">
              DREAMHOUSE DESIGN
            </span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            <span className="bg-gradient-to-r from-[#FF9F1C] to-[#FFBF69] text-transparent bg-clip-text">
              WE MAKE YOUR DREAM HOUSE
            </span>{" "}
            <span className="inline-block animate-bounce">✨</span>
          </h3>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md font-medium bg-gradient-to-r from-[#FF99CC] via-white to-[#7DE2D1] bg-clip-text text-transparent">
            I'm Dinesh (D.C.E), an{" "}
            <span className="italic font-black px-1 bg-[#F72585] text-white rounded-lg transform -rotate-1 inline-block">
              Architect & Civil Contractor
            </span>{" "}
            turning your vision into reality since 2012.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-[#F72585] to-[#7209B7] text-white py-4 px-8 rounded-2xl font-bold text-lg text-center transition-all duration-300 shadow-lg shadow-[#F72585]/30 transform hover:translate-y-[-5px] relative overflow-hidden border-2 border-transparent hover:border-white"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2 bg-gradient-to-r from-white to-[#FFBF69] bg-clip-text text-transparent group-hover:text-white transition-colors">
                  Get Your Free Quote
                </span>
                <span className="text-xl ml-2 transform group-hover:rotate-45 transition-transform">
                  🚀
                </span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#4361EE] to-[#3A0CA3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a
              href="/projects"
              className="group relative bg-transparent backdrop-blur-sm border-2 border-white/70 py-4 px-8 rounded-2xl font-bold text-lg text-center hover:border-[#E4FF1A] hover:bg-[#4CC9F0]/10 transition-all duration-300 shadow-lg transform hover:translate-y-[-5px] overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2 bg-gradient-to-r from-[#E4FF1A] to-white bg-clip-text text-transparent group-hover:text-[#E4FF1A] transition-colors">
                  See The Drip
                </span>
                <span className="text-xl relative transition-all duration-300 group-hover:translate-x-1">
                  👀
                </span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#4CC9F0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-[#111827]/5 via-[#3A0CA3]/10 to-[#4CC9F0]/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F72585]/20 to-[#7209B7]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#4CC9F0]/20 to-[#4361EE]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

        {/* AI-generated image placeholder */}
        <div className="absolute opacity-10 right-0 top-0 h-full w-1/3 overflow-hidden hidden lg:block">
          <div className="absolute right-0 top-0 h-full w-full bg-[url('/ai-architecture.jpg')] bg-cover bg-right-top filter saturate-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#3A0CA3] to-[#F72585] bg-clip-text text-transparent drop-shadow-sm">
            Connect With Us
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 flex-wrap max-w-4xl mx-auto bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <a
              href="https://facebook.com/DREAMHOUSE-DESIGN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group bg-gradient-to-br from-white to-[#F0F9FF] p-4 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-[#1877F2]/20 w-full sm:w-auto"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1877F2] flex items-center justify-center text-white text-xl transition-transform group-hover:scale-110 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[#4B5563] font-medium">Facebook</p>
                <p className="text-lg font-bold bg-gradient-to-r from-[#1877F2] to-[#166FE5] bg-clip-text text-transparent">
                  DREAMHOUSE DESIGN
                </p>
              </div>
            </a>

            <a
              href="https://instagram.com/DAYLORD88"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group bg-gradient-to-br from-white to-[#FDF2F8] p-4 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-[#E1306C]/20 w-full sm:w-auto"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F56040] via-[#E1306C] to-[#5851DB] flex items-center justify-center text-white text-xl transition-transform group-hover:scale-110 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[#4B5563] font-medium">Instagram</p>
                <p className="text-lg font-bold bg-gradient-to-r from-[#F56040] via-[#E1306C] to-[#5851DB] bg-clip-text text-transparent">
                  DAYLORD88
                </p>
              </div>
            </a>

            <a
              href="mailto:Dreamhousedesign.2017@gmail.com"
              className="flex items-center gap-4 group bg-gradient-to-br from-white to-[#FEF2F2] p-4 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-[#F72585]/20 w-full sm:w-auto"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#FF9F1C] to-[#F72585] flex items-center justify-center text-white text-xl transition-transform group-hover:scale-110 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[#4B5563] font-medium">Email</p>
                <p className="text-lg font-bold bg-gradient-to-r from-[#FF9F1C] to-[#F72585] bg-clip-text text-transparent">
                  <span className="hidden xs:inline md:hidden lg:inline">
                    {emailAddress}
                  </span>
                  <span className="inline xs:hidden md:inline lg:hidden">
                    {truncatedEmail}
                  </span>
                  <span className="block text-xs mt-0.5 opacity-75 md:hidden">
                    (Tap to email us)
                  </span>
                </p>
              </div>
            </a>

            <a
              href="tel:9727638760"
              className="flex items-center gap-4 group bg-gradient-to-br from-white to-[#EEF2FF] p-4 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-[#4361EE]/20 w-full sm:w-auto"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4361EE] to-[#4CC9F0] flex items-center justify-center text-white text-xl transition-transform group-hover:scale-110 shadow-md">
                <FaPhone />
              </div>
              <div>
                <p className="text-sm text-[#4B5563] font-medium">Phone</p>
                <p className="text-lg font-bold bg-gradient-to-r from-[#4361EE] to-[#4CC9F0] bg-clip-text text-transparent">
                  +91 9727638760
                </p>
              </div>
            </a>
          </div>

          {/* CTA button */}
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#3A0CA3] to-[#4361EE] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 transform"
            >
              <span>Schedule a Consultation</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
