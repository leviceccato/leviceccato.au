import { style, createVar } from '@vanilla-extract/css'

export const textDecorationThicknessVar = createVar()
export const textUnderlineOffsetVar = createVar()

export const root = style({
	fontWeight: 700,
	letterSpacing: '-0.02em',
})

export const main = style({
	pointerEvents: 'none',
	textDecorationThickness: '0.09em',
	selectors: {
		[`${root}:hover &`]: {
			textDecorationLine: 'underline',
			textUnderlineOffset: '0.1em',
		},
	},
})

export const activeIndicator = style({
	pointerEvents: 'none',
})
