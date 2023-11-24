import { type UserConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

const src = new URL('./src', import.meta.url)
const dist = new URL('./dist', import.meta.url)

export default {
	root: src.pathname,
	clearScreen: false,
	plugins: [ViteMinifyPlugin()],
	server: {
		host: true,
	},
	build: {
		outDir: dist.pathname,
		emptyOutDir: true,
	},
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			drafts: {
				customMedia: true,
				nesting: true,
			},
		},
	},
	resolve: {
		alias: {
			// '#' is used since '@' may be confused with npm organisations
			'#': src.pathname,
		},
	},
} satisfies UserConfig
