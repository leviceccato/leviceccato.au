import { style } from '@vanilla-extract/css'

export const root = style({
	fontWeight: 700,
	letterSpacing: '-0.02em',
	textDecorationThickness: 2,
	':hover': {
		textDecorationLine: 'underline',
		textUnderlineOffset: 2,
	},
})

export const activeIndicator = style({
	pointerEvents: 'none',
})
