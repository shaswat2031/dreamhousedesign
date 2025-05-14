"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home", emoji: "🏠" },
  { href: "/services", label: "Services", emoji: "✨" },
  { href: "/projects", label: "Projects", emoji: "🔥" },
  { href: "/about", label: "About", emoji: "👋" },
  { href: "/contact", label: "Contact", emoji: "📱" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const path = window.location.pathname;
    setActiveLink(path);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          scrolled
            ? "bg-[#3A0CA3]/90 backdrop-blur-lg shadow-lg"
            : "bg-[#3A0CA3]"
        } text-[#F3F4F6] px-4 md:px-8 py-3 md:py-4 z-50 flex items-center justify-between
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-1/3 before:h-full before:bg-[#F72585]/20 before:skew-x-[-20deg] before:transform before:origin-top
        after:content-[''] after:absolute after:top-0 after:right-0 after:w-1/5 after:h-full after:bg-gradient-to-r after:from-[#4CC9F0]/30 after:to-[#4361EE]/20`}
        style={{
          clipPath: !isMenuOpen
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 100%, 85% 90%, 0 100%)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group relative z-10"
        >
          {" "}
          <div className="relative">
            <div className="w-11 h-11 bg-[#3A0CA3] rounded-lg flex items-center justify-center shadow-lg shadow-[#7209B7]/30 group-hover:shadow-[#F72585]/40 transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
              {" "}
              <Image
                src="/logo.jpg"
                alt="DreamHouse Logo"
                width={44}
                height={44}
                className="object-cover relative z-10 rounded-lg"
              />
              <div className="absolute w-full h-full bg-white/10 -top-10 -right-10 transform rotate-45 transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#E4FF1A] rounded-full border-2 border-[#3A0CA3] shadow-lg opacity-0 scale-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"></div>
          </div>{" "}
          <div className="overflow-hidden">
            <h1 className="text-lg font-black text-white leading-none group-hover:translate-x-1 transition-transform duration-300 flex items-center">
              Dream<span className="text-[#4CC9F0]">House</span>
            </h1>
            <span className="text-xs font-bold text-[#E4FF1A] group-hover:tracking-wider transition-all duration-300">
              DESIGN STUDIO ✨
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Center Pill with Diagonal Design */}
        <nav className="hidden md:block relative z-10">
          <div className="bg-white/15 backdrop-blur-md rounded-full px-4 py-2 shadow-lg shadow-[#4361EE]/20 border border-white/20 relative overflow-hidden">
            <div className="flex gap-2 relative z-10">
              {navLinks.map((link, index) => {
                const isActive = activeLink === link.href;
                const isHovered = hoverIndex === index;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    className={`px-4 py-1.5 text-sm font-bold transition-all duration-300 relative z-10 rounded-full ${
                      isActive ? "text-white" : "text-white/80 hover:text-white"
                    } group flex items-center`}
                  >
                    <span
                      className={`mr-1.5 transition-all duration-300 ${
                        isActive || isHovered
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0 w-0"
                      }`}
                    >
                      {link.emoji}
                    </span>
                    {link.label}
                    {(isActive || isHovered) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E4FF1A] rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Active background with diagonal accents */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#F72585] to-[#4361EE] transition-all duration-300 rounded-full z-0"
              style={{
                width: `${100 / navLinks.length}%`,
                transform: `translateX(${
                  navLinks.findIndex((link) => link.href === activeLink) * 100
                }%)`,
              }}
            >
              <div className="absolute top-0 right-0 h-full w-4 bg-white/20 transform skew-x-[20deg] translate-x-2"></div>
              <div className="absolute top-0 left-0 h-full w-4 bg-black/10 transform skew-x-[-20deg] -translate-x-2"></div>
            </div>
          </div>
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:flex items-center gap-2 relative z-10">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#E4FF1A] to-[#FCBF49] px-4 py-2 rounded-full text-black text-sm font-bold shadow-lg shadow-[#E4FF1A]/20 hover:shadow-[#FCBF49]/40 transition-all duration-300 hover:translate-y-[-2px] flex items-center gap-2 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="transform transition-transform group-hover:rotate-12">
                📱
              </span>
              Get the Vibe
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg bg-[#F3F4F6]/10 hover:bg-[#F3F4F6]/20 transition-colors duration-200 flex flex-col items-center justify-center relative z-10"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span
              className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 absolute ${
                isMenuOpen ? "top-2 rotate-45" : "top-0"
              }`}
            ></span>
            <span
              className={`h-0.5 rounded-full bg-white transition-all duration-300 absolute top-2 ${
                isMenuOpen ? "opacity-0 w-0" : "opacity-100 w-full"
              }`}
            ></span>
            <span
              className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 absolute ${
                isMenuOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-gradient-to-b from-[#3A0CA3] to-[#7209B7] pt-24 px-6 pb-8 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{
          clipPath: isMenuOpen
            ? "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] bg-repeat mix-blend-overlay"></div>

        <nav className="flex flex-col gap-3 relative">
          {navLinks.map((link, index) => (
            <div
              key={link.href}
              className={`transition-all duration-300 ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  toggleMenu();
                }}
                className={`block px-5 py-4 rounded-2xl text-base transition-all duration-300 relative overflow-hidden ${
                  activeLink === link.href
                    ? "bg-gradient-to-r from-[#F72585] to-[#4361EE] text-white font-bold shadow-lg shadow-[#F72585]/20"
                    : "text-[#F3F4F6] hover:bg-white/10 backdrop-blur-sm"
                } flex items-center`}
              >
                <span className="mr-3 text-xl">{link.emoji}</span>
                {link.label}
                {activeLink === link.href && (
                  <div className="absolute top-0 right-0 h-full w-2 bg-[#E4FF1A] transform skew-x-[-20deg]"></div>
                )}
              </Link>
            </div>
          ))}
        </nav>

        <div
          className={`mt-12 flex flex-col gap-4 transition-all duration-500 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="pt-4 pb-2 border-t border-white/10">
            <p className="text-white/90 text-sm mb-3 font-medium">
              Need inspo for your space? ✨
            </p>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 py-3.5 text-center relative overflow-hidden rounded-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#E4FF1A] to-[#4CC9F0] transform hover:scale-105 transition-transform duration-300"></div>
              <span className="relative z-10 flex items-center gap-2 text-black font-bold">
                <span className="transform transition-transform group-hover:rotate-12">
                  📱
                </span>
                Get Your Free Quote
              </span>
            </Link>
          </div>

          <div className="flex justify-center gap-6 mt-6 pb-6">
            <a
              href="#"
              className="text-white/70 hover:text-[#E4FF1A] transition-colors duration-300 transform hover:scale-110"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-[#F72585] transition-colors duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-[#4CC9F0] transition-colors duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
