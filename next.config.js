/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/abdul-rafay-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/abdul-rafay-portfolio/' : '',
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