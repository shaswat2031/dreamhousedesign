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
      <Navbar />

      {/* Hero Section - Improved design */}
      <header className="relative bg-gradient-to-r from-[#3A0CA3] via-[#4361EE] to-[#4CC9F0] py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/hero-house.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white">
            Ready to transform your space? Let's talk about your project.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="bg-white shadow-xl rounded-xl p-8 h-full">
              <h2 className="text-2xl font-semibold text-[#3A0CA3] mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services? Need a consultation? We're
                here to help you create your dream space.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#4361EE]/10 flex items-center justify-center mr-4">
                    <FaPhone className="text-[#4361EE]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">+91 9727638760</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#4361EE]/10 flex items-center justify-center mr-4">
                    <FaEnvelope className="text-[#4361EE]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">
                      Dreamhousedesign.2017@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#4361EE]/10 flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-[#4361EE]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">Surat, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center mr-4">
                    <FaWhatsapp className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="font-medium">+91 9727638760</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white shadow-xl rounded-xl p-8">
              {submitted ? (
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                    <FaWhatsapp className="text-green-600 text-4xl" />
                  </div>
                  <h2 className="text-2xl font-semibold mt-4 text-[#1F2937]">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-gray-600 mt-2 mb-6">
                    Thank you for contacting us. Your message has been
                    redirected to our WhatsApp. Our team will respond to you
                    shortly.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-[#4361EE] text-white px-6 py-2 rounded-md hover:bg-[#3A0CA3] transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href="https://wa.me/919727638760"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#25D366] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors flex items-center"
                    >
                      <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-[#3A0CA3] mb-8">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:border-transparent"
                          placeholder="Your WhatsApp number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:border-transparent"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Residential Design">
                          Residential Design
                        </option>
                        <option value="Commercial Design">
                          Commercial Design
                        </option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Renovation">Renovation</option>
                        <option value="Consulting">Consulting</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:border-transparent"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`flex items-center justify-center w-full bg-gradient-to-r from-[#3A0CA3] to-[#4361EE] text-white py-3 rounded-lg font-medium transition-all ${
                        loading
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:from-[#4361EE] hover:to-[#3A0CA3] hover:shadow-lg"
                      }`}
                    >
                      {loading ? (
                        "Sending..."
                      ) : (
                        <>
                          <FaWhatsapp className="mr-2" /> Send via WhatsApp
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center mt-4">
                      By submitting, your message will be sent directly to our
                      WhatsApp for faster response.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41403602112!2d72.72651687475417!3d21.15927952595315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1683362010871!5m2!1sen!2sin"
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
