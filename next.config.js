/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static image imports from src/assets
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // Ensure JavaScript only (no TypeScript)
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;