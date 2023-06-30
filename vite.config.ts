import { resolve } from 'node:path'
import { type UserConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default {
	root: 'src',
	clearScreen: false,
	server: {
		host: true,
	},
	resolve: {
		alias: {
			// '#' is used since '@' may be confused with npm organisations
			'#': resolve('./src'),
		},
	},
	css: {
		// Experimental lightningcss library is provide speed and feature improvements
		transformer: 'lightningcss',
		lightningcss: {
			drafts: {
				nesting: true,
				customMedia: true,
			},
		},
	},
	build: {
		outDir: '../dist',
		// Avoid potential conflicts with routes
		assetsDir: '_assets',
		emptyOutDir: true,
		cssMinify: 'lightningcss',
		// Bleeding edge
		target: 'esnext',
	},
	plugins: [
		// Solid hot reloading requires specific syntax, we have disabled to avoid
		// changing code style, plus Solid is fast enough any way. SSR is
		// necessary for our prerender script to work.
		solid({ hot: false, ssr: true }),
	],
} satisfies UserConfig
