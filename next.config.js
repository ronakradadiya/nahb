/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static image imports from src/assets
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Ensure JavaScript only (no TypeScript)
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;