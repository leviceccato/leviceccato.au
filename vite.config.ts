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
		// All CSS is merged into a single file and loaded upfront. We're
		// doing this because it makes it easier to avoid FOUC with our
		// prerendering setup, otherwise we would have to render preload
		// links for each route, which Solid doesn't make easy. Our CSS
		// output should be small any way, due to aggressive
		// componentisation.
		cssCodeSplit: false,
		outDir: '../dist',
		// Avoid potential conflicts with routes
		assetsDir: '_assets',
		emptyOutDir: true,
		// Bleeding edge
		target: 'esnext',
		// It is necessary for us to retrieve static asset names from a build
		// manifest as prerendering will otherwise use incorrect URLs.
		manifest: true,
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
			// SSR is necessary for our postbuild script to work.
			ssr: true,
		}),
		vanillaExtractPlugin({
			// This is required to get correct class names when prerendering
			emitCssInSsr: true,
		}),
	],
} satisfies UserConfig
