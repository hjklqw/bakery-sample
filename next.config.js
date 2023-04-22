const path = require("node:path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  optimizeFonts: false,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src/"),
    };
    return config;
  },
};

module.exports = nextConfig;
