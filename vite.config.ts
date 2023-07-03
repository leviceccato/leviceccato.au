import { resolve } from 'node:path'
import { type UserConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default {
	root: 'src',
	clearScreen: false,
	server: {
		host: true,
	},
	build: {
		outDir: '../dist',
		// Avoid potential conflicts with routes
		assetsDir: '_assets',
		emptyOutDir: true,
		// Bleeding edge
		target: 'esnext',
	},
	resolve: {
		alias: {
			// '#' is used since '@' may be confused with npm organisations
			'#': resolve('./src'),
		},
	},
	plugins: [
		solidPlugin({
			// Solid hot reloading requires specific syntax, we have disabled to avoid
			// changing code style, plus Solid is fast enough any way.
			hot: false,
			// SSR is necessary for our prerender script to work.
			ssr: true,
		}),
		vanillaExtractPlugin({
			// This is required to get correct class names when prerendering
			emitCssInSsr: true,
		}),
	],
} satisfies UserConfig
