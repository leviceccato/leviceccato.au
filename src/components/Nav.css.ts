import { clampVw } from '#/utils/misc'
import { sizes } from '#/data/theme'
import { style, styleVariants } from '@vanilla-extract/css'

export const root = style({
	display: 'flex',
	marginInline: 'auto',
	justifyContent: 'space-between',
	gap: sizes.columnGap,
	maxInlineSize: sizes.maxContainerInlineSize,
	paddingInline: sizes.pageInlineMargin,
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
	lineHeight: 1.4,
	paddingBlock: '0.1em',
})
