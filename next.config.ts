import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	env: {
		SERVER_URL: process.env.SERVER_URL
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '933a6d34-bb32-49b8-a870-7431150c435d.selstorage.ru'
			}
		]
	}
}

export default nextConfig
