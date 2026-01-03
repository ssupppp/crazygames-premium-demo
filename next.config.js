/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.crazygames.com',
      },
      {
        protocol: 'https',
        hostname: 'images.crazygames.com',
      },
    ],
  },
}

module.exports = nextConfig
