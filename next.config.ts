import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hboxdigital.com',
        port: '',
        pathname: '/public/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/75c85fba34f94c054c9878791e411a17.html',
        destination: '/75c85fba34f94c054c9878791e411a17',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
