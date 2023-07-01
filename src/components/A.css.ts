import { style } from '@vanilla-extract/css'

export const root = style({
	fontWeight: 700,
	letterSpacing: '-0.02em',
	textDecorationThickness: '0.09em',
	':hover': {
		textDecorationLine: 'underline',
		textUnderlineOffset: '0.1em',
	},
})

export const activeIndicator = style({
	pointerEvents: 'none',
})
