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
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-br from-[#3A0CA3] to-[#4361EE] flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-black"></div>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                About Dreamhouse Design
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Turning Dreams into Living Spaces Since 2012
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#111827] mb-6 leading-relaxed">
              At Dreamhouse Design, we believe that your home should be more
              than just a structure — it should be a reflection of your dreams,
              lifestyle, and personality. Founded in 2012 by Dinesh (D.C.E), an
              experienced Architect and Civil Contractor, our firm has been
              committed to creating thoughtful, elegant, and functional living
              spaces that stand the test of time.
            </p>
            <p className="text-lg text-[#111827] mb-6 leading-relaxed">
              With over 20 successful projects completed across Surat and
              surrounding areas, we specialize in crafting custom homes, villas,
              and residential renovations that blend innovative design with
              high-quality construction. Whether it's a cozy compact home or a
              spacious luxury residence, we bring the same level of care,
              precision, and creativity to every project.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white h-96 w-full relative rounded-lg shadow-md overflow-hidden">
                <Image
                  src={about1}
                  alt="Dreamhouse Design project"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">
                  Who We Are
                </h2>
                <p className="mb-4 text-[#111827] leading-relaxed">
                  We are a team of passionate architects, civil engineers, and
                  skilled professionals led by Dinesh, who brings over a decade
                  of industry experience and a strong understanding of practical
                  construction and aesthetic design.
                </p>
                <p className="text-[#111827] leading-relaxed">
                  Our approach is simple — listen closely to your needs, design
                  with creativity, and build with integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 rounded-lg bg-[#F3F4F6] shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#1F2937]">
                  Our Vision
                </h2>
                <p className="text-[#111827] leading-relaxed">
                  To be a trusted name in architectural design and civil
                  construction, known for delivering personalized, sustainable,
                  and innovative solutions that bring our clients' dreams to
                  life.
                </p>
              </div>

              <div className="p-8 rounded-lg bg-[#F3F4F6] shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#1F2937]">
                  Our Mission
                </h2>
                <p className="text-[#111827] leading-relaxed">
                  To create homes that not only meet our clients' expectations
                  but exceed them — through detailed planning, modern design,
                  quality materials, and unmatched craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#1F2937]">
              What Makes Us Different
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#4361EE] rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1F2937]">
                  Client-Centric Approach
                </h3>
                <p className="text-[#111827]">
                  We listen first, plan thoughtfully, and build responsibly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#4361EE] rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1F2937]">
                  End-to-End Solutions
                </h3>
                <p className="text-[#111827]">
                  From architectural planning to final construction, we handle
                  it all.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#4361EE] rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1F2937]">
                  Attention to Detail
                </h3>
                <p className="text-[#111827]">
                  Every project is tailored with precision to meet the client's
                  unique needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#4361EE] rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1F2937]">
                  Transparent Communication
                </h3>
                <p className="text-[#111827]">
                  We keep you informed at every step of the process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey So Far */}

        {/* Meet Our Founder */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1F2937]">
              Meet Our Founder
            </h2>
            <div className="flex justify-center">
              <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-80 w-full">
                  <Image
                    src=""
                    alt="Dinesh Kumar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-[#1F2937]">
                    Dinesh Kumar (D.C.E)
                  </h3>
                  <p className="text-[#4361EE] mb-4 font-medium">
                    Architect & Civil Contractor
                  </p>
                  <p className="text-[#111827] mb-5 leading-relaxed">
                    With over a decade of experience in architectural design and
                    civil construction, Dinesh has led the development of more
                    than 20 successful residential projects. His expertise lies
                    in creating practical, beautiful spaces that reflect each
                    client's unique vision and needs.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/DREAMHOUSE-DESIGN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4361EE] hover:text-[#3A0CA3]"
                      aria-label="Facebook"
                    >
                      <span className="bg-[#4361EE]/10 p-2 rounded-full">
                        FB
                      </span>
                    </a>
                    <a
                      href="https://instagram.com/DAYLORD88"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4361EE] hover:text-[#3A0CA3]"
                      aria-label="Instagram"
                    >
                      <span className="bg-[#4361EE]/10 p-2 rounded-full">
                        IG
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#3A0CA3] to-[#4361EE] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-lg mb-8">
              Contact us today and let us help you turn your vision into
              reality.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#3A0CA3] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
