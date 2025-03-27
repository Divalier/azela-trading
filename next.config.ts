/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Use 'export' instead of 'standalone' for static deployment
  env: {
    SITE_NAME: "Azela Trading",
  },
  images: {
    unoptimized: true, // Required for static export in Next.js
  },
};

export default nextConfig;
