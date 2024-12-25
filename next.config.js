/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<subdomain>[^.]+)\.yourdomain\.com',
          },
        ],
        destination: '/api/tunnel?subdomain=:subdomain',
      },
    ]
  },
}

module.exports = nextConfig

