/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export static site for GitHub Pages
  output: 'export',
  // Ensure Next/Image doesn't require optimization server
  images: { unoptimized: true },
  // Host under /tailwind-ui path on GitHub Pages
  basePath: '/tailwind-ui',
  assetPrefix: '/tailwind-ui/',
  // Produce folder-style routes for GitHub Pages
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  // Enable type-checking during Next build; skipLibCheck avoids lib conflicts
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
