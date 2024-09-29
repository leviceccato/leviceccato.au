import {
	type ViteCustomizableConfig,
	defineConfig,
} from '@solidjs/start/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const src = new URL('./src', import.meta.url)

export default defineConfig({
	server: {
		/**
		 * Render entire site statically
		 */
		prerender: {
			failOnError: false,
			crawlLinks: true,
		},
	},

	vite({ router }) {
		const config: ViteCustomizableConfig = {
			resolve: {
				alias: {
					'@': src.pathname,
				},
			},
		}

		if (router === 'server') {
			config.plugins = [vanillaExtractPlugin()]
		}

		return config
	},
})
