import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/repo-test-1-a",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
