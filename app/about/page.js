"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import about1 from "../../public/about1.jpg";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F3F4F6]">
        {/* Enhanced Hero Section */}
        <section className="relative h-[60vh] bg-gradient-to-br from-[#3A0CA3] to-[#4361EE] flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-black"></div>
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
            <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-white opacity-10 rounded-full"></div>
          </div>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fadeIn">
                About Dreamhouse Design
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto animate-slideUp">
                Turning Dreams into Living Spaces Since 2012
              </p>
            </div>
          </div>
        </section>

        {/* Introduction - Enhanced typography */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-[#111827] mb-8 leading-relaxed font-light">
              At Dreamhouse Design, we believe that your home should be more
              than just a structure — it should be a reflection of your dreams,
              lifestyle, and personality. Founded in 2012 by Dinesh (D.C.E), an
              experienced Architect and Civil Contractor, our firm has been
              committed to creating thoughtful, elegant, and functional living
              spaces that stand the test of time.
            </p>
            <p className="text-lg md:text-xl text-[#111827] mb-6 leading-relaxed font-light">
              With over 20 successful projects completed across Surat and
              surrounding areas, we specialize in crafting custom homes, villas,
              and residential renovations that blend innovative design with
              high-quality construction. Whether it's a cozy compact home or a
              spacious luxury residence, we bring the same level of care,
              precision, and creativity to every project.
            </p>
          </div>
        </section>

        {/* Who We Are Section - Enhanced with hover effects */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white h-96 w-full relative rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
                <Image
                  src={about1}
                  alt="Dreamhouse Design project"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1F2937] relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-[#4361EE]">
                  Who We Are
                </h2>
                <p className="mb-4 text-[#111827] leading-relaxed text-lg">
                  We are a team of passionate architects, civil engineers, and
                  skilled professionals led by Dinesh, who brings over a decade
                  of industry experience and a strong understanding of practical
                  construction and aesthetic design.
                </p>
                <p className="text-[#111827] leading-relaxed text-lg">
                  Our approach is simple — listen closely to your needs, design
                  with creativity, and build with integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission - Enhanced with transition effects */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 rounded-lg bg-[#F3F4F6] shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#E5E7EB]">
                <h2 className="text-2xl font-bold mb-4 text-[#1F2937] flex items-center">
                  <span className="w-8 h-8 bg-[#4361EE] rounded-full mr-3 flex items-center justify-center text-white text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                  Our Vision
                </h2>
                <p className="text-[#111827] leading-relaxed pl-11">
                  To be a trusted name in architectural design and civil
                  construction, known for delivering personalized, sustainable,
                  and innovative solutions that bring our clients' dreams to
                  life.
                </p>
              </div>

              <div className="p-8 rounded-lg bg-[#F3F4F6] shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#E5E7EB]">
                <h2 className="text-2xl font-bold mb-4 text-[#1F2937] flex items-center">
                  <span className="w-8 h-8 bg-[#4361EE] rounded-full mr-3 flex items-center justify-center text-white text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </span>
                  Our Mission
                </h2>
                <p className="text-[#111827] leading-relaxed pl-11">
                  To create homes that not only meet our clients' expectations
                  but exceed them — through detailed planning, modern design,
                  quality materials, and unmatched craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different - Enhanced with transition effects */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#1F2937] relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-[#4361EE]">
              What Makes Us Different
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: 1,
                  title: "Client-Centric Approach",
                  description:
                    "We listen first, plan thoughtfully, and build responsibly.",
                },
                {
                  number: 2,
                  title: "End-to-End Solutions",
                  description:
                    "From architectural planning to final construction, we handle it all.",
                },
                {
                  number: 3,
                  title: "Attention to Detail",
                  description:
                    "Every project is tailored with precision to meet the client's unique needs.",
                },
                {
                  number: 4,
                  title: "Transparent Communication",
                  description:
                    "We keep you informed at every step of the process.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-[#4361EE] rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                    {item.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1F2937]">
                    {item.title}
                  </h3>
                  <p className="text-[#111827]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey So Far - New Timeline Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1F2937] relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-[#4361EE]">
              Our Journey So Far
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4361EE]"></div>

              {/* Timeline events */}
              <div className="space-y-12">
                {/* 2012 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 md:ml-auto md:mr-0">
                      <h3 className="text-xl font-bold text-[#3A0CA3]">2012</h3>
                      <h4 className="text-lg font-semibold mb-2">Founded</h4>
                      <p>
                        Dreamhouse Design was established by Dinesh with a
                        vision to create homes that blend functionality with
                        aesthetic beauty.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-start md:justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#3A0CA3] border-4 border-[#4361EE] z-10 mt-6 md:mt-0"></div>
                  </div>
                </div>

                {/* 2014 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:text-right order-1 md:order-2">
                    <div className="hidden md:block"></div>{" "}
                    {/* Spacer for right side on desktop */}
                  </div>
                  <div className="md:w-1/2 flex justify-end md:justify-center order-2 md:order-1">
                    <div className="w-6 h-6 rounded-full bg-[#3A0CA3] border-4 border-[#4361EE] z-10 mt-6 md:mt-0"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:text-left order-3">
                    <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-bold text-[#3A0CA3]">2014</h3>
                      <h4 className="text-lg font-semibold mb-2">
                        First Major Project
                      </h4>
                      <p>
                        Completed our first villa project, establishing a
                        reputation for quality and attention to detail.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2018 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 md:ml-auto md:mr-0">
                      <h3 className="text-xl font-bold text-[#3A0CA3]">2018</h3>
                      <h4 className="text-lg font-semibold mb-2">Expansion</h4>
                      <p>
                        Expanded our team and services to handle larger
                        residential projects across Surat region.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-start md:justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#3A0CA3] border-4 border-[#4361EE] z-10 mt-6 md:mt-0"></div>
                  </div>
                </div>

                {/* 2022 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:text-right order-1 md:order-2">
                    <div className="hidden md:block"></div>{" "}
                    {/* Spacer for right side on desktop */}
                  </div>
                  <div className="md:w-1/2 flex justify-end md:justify-center order-2 md:order-1">
                    <div className="w-6 h-6 rounded-full bg-[#3A0CA3] border-4 border-[#4361EE] z-10 mt-6 md:mt-0"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:text-left order-3">
                    <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-bold text-[#3A0CA3]">2022</h3>
                      <h4 className="text-lg font-semibold mb-2">
                        10-Year Milestone
                      </h4>
                      <p>
                        Celebrated 10 years of excellence with our 20th
                        successful project completion and established our new
                        design studio.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Current */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-[#3A0CA3] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 md:ml-auto md:mr-0">
                      <h3 className="text-xl font-bold">Today</h3>
                      <h4 className="text-lg font-semibold mb-2">
                        Continued Growth
                      </h4>
                      <p>
                        Continuing to innovate and deliver exceptional homes
                        that exceed our clients' expectations.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-start md:justify-center">
                    <div className="w-8 h-8 rounded-full bg-white border-4 border-[#3A0CA3] z-10 mt-6 md:mt-0 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#3A0CA3] to-[#4361EE] text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-y-1/2 -translate-x-1/2"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-lg md:text-xl mb-8 font-light">
              Contact us today and let us help you turn your vision into
              reality.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#3A0CA3] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors hover:shadow-lg transform transition-transform hover:-translate-y-1"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
      <Footer />

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out 0.5s both;
        }
      `}</style>
    </>
  );
}
