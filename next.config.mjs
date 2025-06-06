/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dreamhousedesign-steel.vercel.app", "res.cloudinary.com"],
    unoptimized: process.env.NODE_ENV !== "production",
  },
  experimental: {
    // Next.js 15.x experimental features if needed
  },
};

export default nextConfig;
