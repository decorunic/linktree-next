/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/linktree',
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index',
      },
      {
        source: '/index',
        destination: '/',
      },
      {
        source: '/login',
        destination: '/auth/login',
      },
    ]
  }
}

module.exports = nextConfig
