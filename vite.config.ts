import { resolve } from 'node:path'
import { type UserConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { imagetools } from 'vite-imagetools'

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
	},
	resolve: {
		alias: {
			// '#' is used since '@' may be confused with npm organisations
			'#': resolve('./src'),
		},
	},
	plugins: [
		solid({
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
		// HACK:
		// Ensure that rollup's watchMode is set to false during prerendering
		// to avoid incorrect image URLs from the imagetools plugin.
		{
			name: 'imagetools-hack',
			options() {
				if (import.meta.env.SSR) {
					this.meta.watchMode = false
				}
			},
		},
		imagetools({
			// Add default directives for common image transformations.
			// Search params will be expanded. The directives should
			// correspond to the declarations found in './src/index.d.ts'.
			// This to ensure typescript plays nice with the params.
			defaultDirectives({ searchParams }) {
				// &as=metadata will return an object with all image
				// info instead of just a URL.
				searchParams.append('as', 'metadata')

				// Use AVIF and JPG as fallback for lossy images
				if (searchParams.has('lossy')) {
					searchParams.append('format', 'jpg;avif')
				}
				// Since AVIF can handle lossy and lossless transparency
				// you can use 'lossless' for transparent images.
				else if (searchParams.has('lossless')) {
					searchParams.append('format', 'png;avif')
				}

				return searchParams
			},
		}),
	],
} satisfies UserConfig
