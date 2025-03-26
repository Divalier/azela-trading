import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  env: {
    SITE_NAME: "Azela Trading",
  },
};

export default nextConfig;
