import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    resolveAlias: {
      "moxfield-api": "./node_modules/moxfield-api/dist/moxfield-api.mjs",
    },
  },
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
