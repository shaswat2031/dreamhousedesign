/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dreamhousedesign-steel.vercel.app"],
    unoptimized: process.env.NODE_ENV !== "production",
  },
  // Next.js 15.x doesn't support experimental.images.allowFutureImage
  experimental: {
    // Remove the images property as it's not supported in this format
  },
};

export default nextConfig;
