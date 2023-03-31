/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* images: {
    domains: ['spoonacular.com'],
  }, */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spoonacular.com',
      },
    ],
  },
}

module.exports = nextConfig
