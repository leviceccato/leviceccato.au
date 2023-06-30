import { clampVw } from '#/utils/misc'
import { sizes } from '#/data/theme'
import { style } from '@vanilla-extract/css'

export const skipLink = style({
	marginInline: 'auto',
	inlineSize: '100%',
	maxInlineSize: sizes.maxContainerInlineSize,
	padding: sizes.pageInlineMargin,
	fontWeight: 700,
	letterSpacing: '-0.02em',
	fontSize: clampVw(16, 18),
	selectors: {
		'&:focus, &:hover': {
			textDecoration: 'underline',
		},
	},
})

export const root = style({
	paddingBlockStart: clampVw(0, 70),
})
