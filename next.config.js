/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    trailingSlash: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co'
            },
            {
                protocol: 'https',
                hostname: 'ibb.co'
            },
            {
                protocol: 'https',
                hostname: 'api.npoint.io'
            }
        ]
    }
}

module.exports = nextConfig
