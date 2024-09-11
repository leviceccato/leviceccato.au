import { defineConfig } from '@solidjs/start/config'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
	server: {
		prerender: {
			crawlLinks: true,
		},
	},
	vite: {
		plugins: [imagetools()],
		build: {
			emptyOutDir: true,
		},
		resolve: {
			alias: {
				'@': './src',
			},
		},
	},
})
