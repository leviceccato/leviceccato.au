import { style, createVar, fallbackVar } from '@vanilla-extract/css'

export const textDecorationThicknessVar = createVar()
export const textUnderlineOffsetVar = createVar()
export const defaultTextDecorationLineVar = createVar()

export const root = style({
	fontWeight: 700,
	letterSpacing: '-0.02em',
})

export const main = style({
	pointerEvents: 'none',
	textDecorationThickness: fallbackVar(textDecorationThicknessVar, '0.09em'),
	textDecorationLine: fallbackVar(defaultTextDecorationLineVar, 'none'),
	selectors: {
		[`${root}:hover &`]: {
			textDecorationLine: 'underline',
			textUnderlineOffset: fallbackVar(textUnderlineOffsetVar, '0.1em'),
		},
	},
})

export const activeIndicator = style({
	pointerEvents: 'none',
})
