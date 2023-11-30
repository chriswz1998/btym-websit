/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputStandalone: true
    },
    images: {
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
