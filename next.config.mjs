/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use a standalone server build so Cloudflare/OpenNext can locate server files.
  // If you intentionally need a static export, remove OpenNext/Cloudflare adapter instead.
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
