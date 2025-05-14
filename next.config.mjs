/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dreamhousedesign.com'],
    unoptimized: process.env.NODE_ENV !== 'production'
  },
  // Enable static image imports
  experimental: {
    images: {
      allowFutureImage: true
    }
  }
};

export default nextConfig;
