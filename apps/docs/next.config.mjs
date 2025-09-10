/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export static site for deployment
  output: 'export',
  // Ensure Next/Image doesn't require optimization server
  images: { unoptimized: true },
  // Configure base path based on environment
  ...(process.env.NEXT_PUBLIC_BASE_PATH && {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH + '/',
  }),
  // Produce folder-style routes for static hosting
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  // Enable type-checking during Next build
  // typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
