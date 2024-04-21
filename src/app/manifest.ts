import { MetadataRoute } from 'next';
import { env } from '@/env';

export default function manifest(): MetadataRoute.Manifest {
	return {
		// scope: '/',
		lang: 'en',
		name: 'Livestock Information System',
		description: 'Livestock Information System',
		short_name: 'LIS',
		start_url: '/',
		display: 'standalone',
		theme_color: 'rgb(203 213 225)',
		background_color: 'rgb(203 213 225)',
		icons: [
			{
				src: '/favicon.ico',
				sizes: '32x32',
				type: 'image/x-icon',
			},
			{
				src: '/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
		protocol_handlers: [
			{
				protocol: 'web+cas',
				url: env.BASE_URL ? `${env.BASE_URL}/%s` : `http://localhost:${process.env.PORT ?? 8800}/%s`,
			},
		],
	};
}
