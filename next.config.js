/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/b2b",
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/login",
      },
    ];
  },
};

module.exports = nextConfig;
