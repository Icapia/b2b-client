module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
    formats: ["image/avif", "image/webp"],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/organization",
        permanent: true,
      },
    ];
  },
};
