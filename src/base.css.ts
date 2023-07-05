import { globalStyle as g } from '@vanilla-extract/css'
import { colours, cursors } from '#/data/theme'

g('html', {
	height: '100%',
})

g('body', {
	margin: 0,
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: colours.bg,
	color: colours.fg,
	// Fixes bold looking fonts on macOS in Chrome & Safari
	WebkitFontSmoothing: 'antialiased',
	// Fixes bold looking fonts on macOS in Firefox
	MozOsxFontSmoothing: 'grayscale',
	lineHeight: 1.4,
})

g('*', {
	cursor: [
		`url("${cursors.arrow1X}"), default`,
		`-webkit-image-set(url("${cursors.arrow1X}") 1x, url("${cursors.arrow1P5X}") 2x), default;`,
	],
})

g('a, button', {
	cursor: [
		`url("${cursors.pointer1X}"), default`,
		`-webkit-image-set(url("${cursors.pointer1X}") 1x, url("${cursors.pointer1P5X}") 2x), default;`,
	],
})

g('::selection', {
	backgroundColor: colours.fg,
	color: colours.bg,
})

g('blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre', {
	margin: 0,
})

g('iframe', {
	border: 'none',
	width: '100%',
})

g('ol, ul', {
	listStyle: 'none',
	margin: 0,
	padding: 0,
})

g('h1, h2, h3, h4, h5, h6', {
	fontSize: 'inherit',
	fontWeight: 'inherit',
})

g('a', {
	color: 'inherit',
	textDecoration: 'inherit',
})

g('input', {
	fontFamily: 'inherit',
	fontSize: 'inherit',
	color: 'inherit',
})

g('input::-webkit-input-placeholder', {
	color: 'inherit',
})

g('input::placeholder', {
	color: 'inherit',
	opacity: 'inherit',
})

g('input::-ms-clear', {
	display: 'none',
	width: 0,
	height: 0,
})

// Clears the 'X' from Chrome
g(
	'input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-results-button, input[type="search"]::-webkit-search-results-decoration',
	{
		display: 'none',
	},
)

g('input[type=range]', {
	WebkitAppearance: 'none',
	width: '100%',
	display: 'block',
})

g('input[type=range]::-webkit-slider-thumb', {
	WebkitAppearance: 'none',
})

g(':where(input[type=range]:focus)', {
	outline: 'none',
})

g('input[type=range]::-ms-track', {
	width: '100%',
	background: 'transparent',
	cursor: 'pointer',
	borderColor: 'transparent',
	color: 'transparent',
})

g('button, textarea, input, select, a', {
	WebkitTapHighlightColor: ['rgba(0, 0, 0, 0)', 'transparent'],
})

g('button', {
	display: 'inline-flex',
	color: 'inherit',
	background: 'none',
	border: 'none',
	fontFamily: 'inherit',
	textAlign: 'inherit',
	fontSize: 'inherit',
	letterSpacing: 'inherit',
	lineHeight: 'inherit',
	padding: 0,
})

g('button:focus', {
	outline: 'none',
})

g('button:enabled', {
	cursor: 'pointer',
})

g('button:disabled', {
	cursor: 'not-allowed',
})

g('img, svg, video, canvas, audio, iframe, embed, object', {
	maxWidth: '100%',
	display: 'block',
	verticalAlign: 'middle',
})

g('svg', {
	fill: 'currentColor',
})
