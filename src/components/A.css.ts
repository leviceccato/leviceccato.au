import { style, createVar, fallbackVar } from '@vanilla-extract/css'

export const textDecorationThicknessVar = createVar()
export const hoverTextDecorationThicknessVar = createVar()
export const textUnderlineOffsetVar = createVar()
export const defaultTextDecorationLineVar = createVar()
export const fontWeightVar = createVar()
export const hoverStrokeVar = createVar()

export const defaultTextDecorationThickness = '0.09em'

export const root = style({
	fontWeight: fallbackVar(fontWeightVar, '700'),
	letterSpacing: '-0.02em',
})

export const main = style({
	pointerEvents: 'none',
	textDecorationThickness: fallbackVar(
		textDecorationThicknessVar,
		defaultTextDecorationThickness,
	),
	textDecorationLine: fallbackVar(defaultTextDecorationLineVar, 'none'),
	textUnderlineOffset: fallbackVar(textUnderlineOffsetVar, '0.1em'),
	selectors: {
		[`${root}:hover &`]: {
			textDecorationLine: 'underline',
			WebkitTextStroke: fallbackVar(hoverStrokeVar, '0 currentColor'),
			textDecorationThickness: fallbackVar(
				hoverTextDecorationThicknessVar,
				textDecorationThicknessVar,
				defaultTextDecorationThickness,
			),
		},
	},
})

export const activeIndicator = style({
	pointerEvents: 'none',
})
