import { style } from '@vanilla-extract/css'
import { clampVw } from '#/utils/misc'
import { lineHeightVar } from '#/components/Text.css'
import {
	textDecorationThicknessVar,
	textUnderlineOffsetVar,
} from '#/components/A.css'

export const root = style({
	letterSpacing: '-0.03em',
	marginBlockStart: '2em',
	marginBlockEnd: '0.9em',
	fontSize: clampVw(25, 33),
	vars: {
		[lineHeightVar]: '1.2',
		[textDecorationThicknessVar]: '2px',
		[textUnderlineOffsetVar]: '3px',
	},
})
