import { type UserConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

const src = new URL('./src', import.meta.url)

export default {
	root: src.pathname,
	clearScreen: false,
	plugins: [ViteMinifyPlugin()],
	server: {
		host: true,
	},
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			drafts: {
				nesting: true,
			},
		},
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
