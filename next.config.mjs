/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
