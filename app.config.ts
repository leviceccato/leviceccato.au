import { defineConfig } from '@solidjs/start/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const src = new URL('./src', import.meta.url)

export default defineConfig({
	/**
	 * Not necessary for prerendered SPA, this also
	 * prevents vanilla-extract from working
	 * */
	ssr: false,

	server: {
		prerender: {
			/**
			 * Render entire site statically
			 */
			crawlLinks: true,
		},
	},

	vite: {
		plugins: [vanillaExtractPlugin()],
		resolve: {
			alias: {
				'@': src.pathname,
			},
		},
	},
})
