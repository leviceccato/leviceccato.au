import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { viteSingleFile } from 'vite-plugin-singlefile'

const src = new URL('./src', import.meta.url)
const dist = new URL('./dist', import.meta.url)

export default defineConfig({
	root: src.pathname,
	clearScreen: false,
	plugins: [ViteMinifyPlugin(), viteSingleFile()],
	server: {
		host: true,
	},
	build: {
		outDir: dist.pathname,
		emptyOutDir: true,
		// May be necessary when we are actually using JS
		modulePreload: false,
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
})
