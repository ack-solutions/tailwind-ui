/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  // Enable type-checking during Next build; skipLibCheck avoids lib conflicts
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
