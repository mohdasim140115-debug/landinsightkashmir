/** @type {import('next').NextConfig} */
const nextConfig = {
  // Matches the live URL format: /kashmir-tour-package/
  trailingSlash: true,
  poweredByHeader: false,
  // Hide the floating "N" Next.js dev-tools badge during `npm run dev`.
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1600, 1920],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/kashmir-tour-package/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
