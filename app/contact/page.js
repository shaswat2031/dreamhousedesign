"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "General Inquiry",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Format the message for WhatsApp
      const whatsappMessage = encodeURIComponent(
        `New inquiry from website:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage: ${formData.message}`
      );

      // Open WhatsApp with pre-filled message
      window.open(
        `https://wa.me/919727638760?text=${whatsappMessage}`,
        "_blank"
      );

      // Mark as submitted
      setSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "General Inquiry",
      });
    } catch (err) {
      console.error("Form error:", err);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={`min-h-screen bg-[#F3F4F6] ${poppins.className}`}>
      <Navbar /> {/* Enhanced Hero Section with animated elements */}
      <header className="relative bg-gradient-to-r from-[#3A0CA3] via-[#4361EE] to-[#4CC9F0] py-28 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/hero-house.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>

        {/* Animated decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full transform -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-white opacity-10 rounded-full"></div>

        {/* Content with animation */}
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInDown">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white animate-fadeInUp">
            Ready to transform your space into something extraordinary?
            <span className="block mt-2 font-light">
              Let's bring your vision to life.
            </span>
          </p>

          {/* Quick contact buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fadeInUp animation-delay-300">
            <a
              href="tel:+919727638760"
              className="flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm px-5 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <FaPhone className="mr-2" /> Call Now
            </a>
            <a
              href="https://wa.me/919727638760"
              target="_blank"
              rel="noreferrer"
              className="flex items-center bg-[#25D366] hover:bg-[#25D366]/90 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <FaWhatsapp className="mr-2" /> WhatsApp
            </a>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {" "}
          {/* Enhanced Contact Information with hover effects */}
          <div className="md:col-span-1">
            <div className="bg-white shadow-2xl rounded-3xl p-8 h-full border border-gray-100 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#3A0CA3] to-[#4361EE]"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#4361EE]/5 rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#3A0CA3]/5 rounded-full"></div>

              <h2 className="text-3xl font-bold text-[#3A0CA3] mb-6 relative">
                Get In Touch
                <span className="block w-20 h-1 bg-[#4361EE] mt-3"></span>
              </h2>
              <p className="text-gray-600 mb-10 text-lg">
                Have questions about our services? Need a consultation? We're
                here to help you create your dream space.
              </p>

              <div className="space-y-8">
                <a
                  href="tel:+919727638760"
                  className="contact-info-card flex items-center p-3 rounded-xl transition-all duration-300 hover:bg-[#4361EE]/5 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#4361EE]/10 flex items-center justify-center mr-4 shadow-md group-hover:bg-[#4361EE] group-hover:text-white transition-all duration-300">
                    <FaPhone className="text-[#4361EE] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="font-semibold text-[#1F2937] group-hover:text-[#3A0CA3] transition-colors duration-300">
                      +91 9727638760
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:Dreamhousedesign.2017@gmail.com"
                  className="contact-info-card flex items-center p-3 rounded-xl transition-all duration-300 hover:bg-[#4361EE]/5 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#4361EE]/10 flex items-center justify-center mr-4 shadow-md group-hover:bg-[#4361EE] group-hover:text-white transition-all duration-300">
                    <FaEnvelope className="text-[#4361EE] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="font-semibold text-[#1F2937] group-hover:text-[#3A0CA3] transition-colors duration-300 break-all">
                      Dreamhousedesign.2017@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Surat,Gujarat,India"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-card flex items-center p-3 rounded-xl transition-all duration-300 hover:bg-[#4361EE]/5 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#4361EE]/10 flex items-center justify-center mr-4 shadow-md group-hover:bg-[#4361EE] group-hover:text-white transition-all duration-300">
                    <FaMapMarkerAlt className="text-[#4361EE] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Address
                    </p>
                    <p className="font-semibold text-[#1F2937] group-hover:text-[#3A0CA3] transition-colors duration-300">
                      Surat, Gujarat, India
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919727638760"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-card flex items-center p-3 rounded-xl transition-all duration-300 hover:bg-[#25D366]/10 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center mr-4 shadow-md group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                    <FaWhatsapp className="text-[#25D366] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <p className="font-semibold text-[#1F2937] group-hover:text-[#25D366] transition-colors duration-300">
                      +91 9727638760
                    </p>
                  </div>
                </a>

                {/* Social proof */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm text-center text-gray-600 mb-2">
                    Trusted by clients across Surat
                  </p>
                  <div className="flex justify-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 rounded-full bg-gradient-to-r from-blue-${
                            i * 100
                          } to-purple-${
                            i * 100
                          } border-2 border-white flex items-center justify-center text-xs text-white font-bold`}
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <p className="ml-4 text-sm font-medium text-gray-700">
                      20+ projects completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}{" "}
          <div className="md:col-span-2">
            <div className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-100 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#3A0CA3] to-[#4361EE]"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#4361EE]/5 rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#3A0CA3]/5 rounded-full"></div>

              {submitted ? (
                <div className="text-center p-8 animate-fadeIn">
                  <div className="w-24 h-24 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-8 shadow-lg animate-bounce-slow">
                    <FaWhatsapp className="text-green-600 text-5xl" />
                  </div>
                  <h2 className="text-3xl font-bold mt-4 text-[#1F2937]">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-gray-600 mt-4 mb-8 text-lg max-w-md mx-auto">
                    Thank you for contacting us. Your message has been
                    redirected to our WhatsApp. Our team will respond to you
                    shortly.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-[#4361EE] text-white px-8 py-3 rounded-full hover:bg-[#3A0CA3] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
                    >
                      Send Another Message
                    </button>
                    <a
                      href="https://wa.me/919727638760"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#25D366] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
                    >
                      <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-[#3A0CA3] mb-8 relative">
                    Send Us a Message
                    <span className="block w-20 h-1 bg-[#4361EE] mt-3"></span>
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-group relative">
                        <label className="block text-gray-700 mb-2 font-medium text-sm uppercase tracking-wider">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:border-transparent focus:bg-white transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="form-group relative">
                        <label className="block text-gray-700 mb-2 font-medium text-sm uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:border-transparent focus:bg-white transition-all duration-300"
                          placeholder="Your WhatsApp number"
                        />
                      </div>
                    </div>
                    <div className="form-group relative">
                      <label className="block text-gray-700 mb-2 font-medium text-sm uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:border-transparent focus:bg-white transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>{" "}
                    <div className="form-group relative">
                      <label className="block text-gray-700 mb-2 font-medium text-sm uppercase tracking-wider">
                        Service Interested In
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full border border-gray-200 bg-gradient-to-r from-gray-50/80 to-white/90 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:border-transparent focus:bg-gradient-to-r focus:from-white focus:to-[#4361EE]/5 transition-all duration-300 appearance-none cursor-pointer hover:shadow-md text-gray-700"
                        >
                          <option
                            value="General Inquiry"
                            className="bg-white text-gray-700 hover:bg-[#4361EE]/5"
                          >
                            General Inquiry
                          </option>
                          <option
                            value="Residential Design"
                            className="bg-white text-gray-700 hover:bg-[#4361EE]/5"
                          >
                            Residential Design
                          </option>{" "}
                          <option
                            value="Commercial Design"
                            className="bg-white text-gray-700 hover:bg-[#4361EE]/5"
                          >
                            Commercial Design
                          </option>
                          <option
                            value="Interior Design"
                            className="bg-white text-gray-700 hover:bg-[#4361EE]/5"
                          >
                            Interior Design
                          </option>
                          <option
                            value="Renovation"
                            className="bg-white text-gray-700 hover:bg-[#4361EE]/5"
                          >
                            Renovation
                          </option>
                          <option
                            value="Landscape Design"
                            className="bg-white text-gray-700 hover:bg-[#4361EE]/5"
                          >
                            Landscape Design
                          </option>
                          <option
                            value="3D Visualization"
                            className="bg-white text-gray-700 hover:bg-[#4361EE]/5"
                          >
                            3D Visualization
                          </option>
                          <option
                            value="Furniture Design"
                            className="bg-white text-gray-700 hover:bg-[#4361EE]/5"
                          >
                            Furniture Design
                          </option>
                          <option
                            value="Smart Home Integration"
                            className="bg-white text-gray-700 hover:bg-[#4361EE]/5"
                          >
                            Smart Home Integration
                          </option>
                          <option
                            value="Consulting"
                            className="bg-white text-gray-700 hover:bg-[#4361EE]/5"
                          >
                            Consulting
                          </option>
                        </select>
                        {/* Custom select arrow */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#4361EE] bg-gradient-to-l from-[#4361EE]/10 to-transparent h-full rounded-r-xl">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="form-group relative">
                      {" "}
                      <label className="block text-gray-700 mb-2 font-medium text-sm uppercase tracking-wider">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full border border-gray-200 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:border-transparent focus:bg-gradient-to-r focus:from-white focus:to-[#4361EE]/5 hover:shadow-md transition-all duration-300 font-black text-blue-500"
                        placeholder="Tell us about your project..."
                        style={{
                          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.03)",
                          borderColor: "#e2e8f0",
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`flex items-center justify-center w-full bg-gradient-to-r from-[#3A0CA3] to-[#4361EE] text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-md ${
                        loading
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:from-[#4361EE] hover:to-[#3A0CA3] hover:shadow-lg transform hover:-translate-y-1"
                      }`}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaWhatsapp className="mr-2 text-xl" /> Send via
                          WhatsApp
                        </>
                      )}
                    </button>
                    <p className="text-sm text-gray-500 text-center mt-6 px-6">
                      By submitting, your message will be sent directly to our
                      WhatsApp for faster response. We typically respond within
                      24 hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white shadow-md rounded-xl p-4">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Find Us Here
          </h3>
          <div className="aspect-[16/9] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.848588805657!2d72.84837131075928!3d21.237851880482793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fe7bf51786d%3A0x844944836a89d6d!2sDreem%20house!5e0!3m2!1sen!2sin!4v1747245026763!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0.5rem" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
