import { style } from '@vanilla-extract/css'
import { clampVw } from '#/utils/misc'
import {
	defaultTextDecorationLineVar,
	fontWeightVar,
	textDecorationThicknessVar,
	hoverStrokeVar,
	hoverTextDecorationThicknessVar,
} from '#/components/A.css'
import { lineHeightVar } from '#/components/Text.css'

export const paragraph = style({
	fontSize: clampVw(16, 17),
	marginBlockStart: '1em',
	marginBlockEnd: '1em',
	vars: {
		[lineHeightVar]: '1.5',
		[defaultTextDecorationLineVar]: 'underline',
		[fontWeightVar]: '500',
		[textDecorationThicknessVar]: '1px',
		[hoverStrokeVar]: '0.02em currentColor',
		[hoverTextDecorationThicknessVar]: '2px',
	},
})
