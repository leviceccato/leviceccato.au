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
})

export const column = styleVariants({
	borderStart: [columnBase, { borderBlockStart: '2px solid currentColor' }],
	borderEnd: [columnBase, { borderBlockEnd: '2px solid currentColor' }],
})

export const link = style({
	boxSizing: 'content-box',
	display: 'block',
	lineHeight: 1.4,
	fontWeight: 700,
	letterSpacing: '-0.02em',
	paddingBlock: '0.1em',
	textDecorationThickness: 2,
	':hover': {
		textDecorationLine: 'underline',
		textUnderlineOffset: 2,
	},
})
