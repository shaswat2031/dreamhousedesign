import Image from "next/image";
import { motion } from "framer-motion";

const FeaturedGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-bold text-[#3A0CA3] uppercase tracking-wider px-3 py-1 bg-[#3A0CA3]/10 rounded-full">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-[#F72585] to-[#4361EE] text-transparent bg-clip-text">
              Project Gallery
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of our finest work across various categories - from
            residential homes to commercial spaces
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Large featured image */}
          <motion.div
            className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/MAALI  HOUSE.jpg"
              alt="Featured Project"
              width={800}
              height={800}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">MAALI HOUSE</h3>
              <p className="text-white/80">Residential Excellence</p>
            </div>
          </motion.div>

          {/* Smaller images in grid */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="/Interior.jpg"
              alt="Interior Design"
              width={400}
              height={300}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">Interior Design</h3>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/Kitchen_Renovation.jpg"
              alt="Kitchen Renovation"
              width={400}
              height={300}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">Kitchen Design</h3>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src="/Restaurant Designs.jpg"
              alt="Restaurant Design"
              width={400}
              height={300}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">Restaurant Space</h3>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/Sun temple.jpg"
              alt="Temple Renovation"
              width={400}
              height={300}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">Heritage Conservation</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
