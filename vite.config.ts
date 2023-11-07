import { type UserConfig } from 'vite'

const src = new URL('./src', import.meta.url)

export default {
	root: src.pathname,
	clearScreen: false,
	server: {
		host: true,
	},
	css: {
		transformer: 'lightningcss',
	},
	build: {
		outDir: '../dist',
		emptyOutDir: true,
	},
	resolve: {
		alias: {
			// '#' is used since '@' may be confused with npm organisations
			'#': src.pathname,
		},
	},
} satisfies UserConfig
