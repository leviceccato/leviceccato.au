import { clampVw } from '#/utils/misc'
import { sizes } from '#/data/theme'
import { style, styleVariants } from '@vanilla-extract/css'
import {
	textDecorationThicknessVar,
	textUnderlineOffsetVar,
} from '#/components/A.css'
import { lineHeightVar } from '#/components/Text.css'

export const root = style({
	display: 'flex',
	justifyContent: 'space-between',
	gap: sizes.columnGap,
})

const columnBase = style({
	inlineSize: '100%',
	fontSize: clampVw(16, 18),
	paddingBlock: '0.4em',
	borderBlock: '2px solid',
})

export const column = styleVariants({
	borderStart: [
		columnBase,
		{
			borderBlockStartColor: 'currentcolor',
			borderBlockEndColor: 'transparent',
		},
	],
	borderEnd: [
		columnBase,
		{
			borderBlockStartColor: 'transparent',
			borderBlockEndColor: 'currentColor',
		},
	],
})

export const link = style({
	boxSizing: 'content-box',
	display: 'block',
	paddingBlock: '0.1em',
	vars: {
		[lineHeightVar]: '1.4',
		[textDecorationThicknessVar]: '2px',
		[textUnderlineOffsetVar]: '2px',
	},
})
