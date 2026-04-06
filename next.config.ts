import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.scryfall.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
