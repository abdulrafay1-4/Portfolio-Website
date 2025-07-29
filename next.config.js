/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio-Website/' : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    // Add any environment variables here
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig;
