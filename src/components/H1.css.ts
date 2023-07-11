import { style } from '@vanilla-extract/css'
import { clampVw } from '#/utils/misc'
import { lineHeightVar } from '#/components/Text.css'

export const root = style({
	letterSpacing: '-0.03em',
	marginBlockStart: '3em',
	marginBlockEnd: '0.9em',
	fontSize: clampVw(33, 47),
	vars: {
		[lineHeightVar]: '1.15',
	},
})
