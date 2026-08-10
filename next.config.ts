import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "praaroop.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  // Trailing slash to match existing WordPress URL structure
  trailingSlash: true,
};

export default nextConfig;
