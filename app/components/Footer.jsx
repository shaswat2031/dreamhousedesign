import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-[#F3F4F6]">
      {/* Top wave decoration */}
      <div className="bg-[#F3F4F6] h-6 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-6 w-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#1F2937"
            opacity="1"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-8 pb-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company info section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6 text-xl relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#F97316] after:-bottom-2 after:left-1/2 after:-translate-x-1/2 md:after:left-0 md:after:translate-x-0">
              DREAMHOUSE DESIGN
            </h4>
            <p className="text-gray-400 mb-6 text-center md:text-left">
              Turning your dream house into reality since 2012. We specialize in
              architectural design and civil construction.
            </p>

            {/* Social media links with improved UI */}
            <div className="flex gap-4 justify-center md:justify-start mb-4">
              <Link
                href="https://facebook.com/DREAMHOUSE-DESIGN"
                target="_blank"
                aria-label="Facebook"
                className="bg-gradient-to-r from-[#1877F2] to-[#166FE5] p-2.5 rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/DAYLORD88"
                target="_blank"
                aria-label="Instagram"
                className="bg-gradient-to-br from-[#F56040] via-[#E1306C] to-[#5851DB] p-2.5 rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact info section with improved UI */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6 text-xl relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#F97316] after:-bottom-2 after:left-1/2 after:-translate-x-1/2 md:after:left-0 md:after:translate-x-0">
              Contact Us
            </h4>
            <address className="not-italic flex flex-col gap-4 mb-6 w-full">
              <div className="flex items-start gap-3 group">
                <div className="bg-gray-700 p-2 rounded-full group-hover:bg-[#F97316] transition-colors mt-0.5">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="group-hover:text-[#F97316] transition-colors">
                    123 Construction Ave, Building City, BC 12345
                  </p>
                </div>
              </div>

              <a
                href="mailto:Dreamhousedesign.2017@gmail.com"
                className="flex items-start gap-3 group"
              >
                <div className="bg-gray-700 p-2 rounded-full group-hover:bg-[#F97316] transition-colors mt-0.5">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="group-hover:text-[#F97316] transition-colors break-words">
                    Dreamhousedesign.2017@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919727638760"
                className="flex items-start gap-3 group"
              >
                <div className="bg-gray-700 p-2 rounded-full group-hover:bg-[#F97316] transition-colors mt-0.5">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="group-hover:text-[#F97316] transition-colors">
                    +91 9727638760
                  </p>
                </div>
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} DREAMHOUSE DESIGN. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0">
            <span className="text-gray-400">Designed with ❤️ by </span>
            <span className="text-[#F97316]">Shaswat</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
