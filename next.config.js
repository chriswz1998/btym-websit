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
			}
		]
	}
}

module.exports = nextConfig
