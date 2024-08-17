export default {
	root: 'src',
	clearScreen: false,
	server: {
		host: true,
	},
	build: {
		outDir: '../dist',
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
}
