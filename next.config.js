/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  // Explicitly mark which packages are server-only
  experimental: {
    serverComponentsExternalPackages: ["cloudinary"],
  },
  webpack: (config, { isServer }) => {
    // Only include the 'fs' module on the server side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
