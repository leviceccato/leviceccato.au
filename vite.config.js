export default {
	clearScreen: false,
	server: {
		host: true,
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
