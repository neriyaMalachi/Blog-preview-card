/** @type {import('next').NextConfig} */

const isPord = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isPord ? "/Blog-preview-card" : "",
  output: "export",
//   distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
