/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages. Comment out `output` to deploy on Vercel.
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
