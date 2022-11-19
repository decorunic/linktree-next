/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites() {
    return [
      {
        source: "/",
        destination: "https://decorunic.id/",
      },
    ];
  }
}

module.exports = nextConfig
