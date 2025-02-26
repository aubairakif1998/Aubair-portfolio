/* eslint-disable @typescript-eslint/no-explicit-any */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Enable React Strict Mode (optional)
  images: {
    disableStaticImages: false, // Disable image optimization for static images
  },
  webpack(config: any) {
    // Additional Webpack configuration if needed
    return config;
  },
};

module.exports = nextConfig;
