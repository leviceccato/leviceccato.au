import {
	type ViteCustomizableConfig,
	defineConfig,
} from '@solidjs/start/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const src = new URL('./src', import.meta.url)

export default defineConfig({
	server: {
		// Render entire statically
		prerender: {
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

		if (router === 'client') {
			config.plugins = [
				// Doesn't work in SSR context
				vanillaExtractPlugin(),
			]
		}

		return config
	},
})
