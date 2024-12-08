/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  async rewrites() {
    return [
      {
        source: '/apis/:path*',
        destination: 'http://103.224.100.38:8001/v1/:path*'
      }
    ]
  }
}

export default nextConfig