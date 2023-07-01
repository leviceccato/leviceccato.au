import { style } from '@vanilla-extract/css'
import { sizes } from '#/data/theme'

export const root = style({
	marginInline: 'auto',
	maxInlineSize: sizes.maxContainerInlineSize,
	paddingInline: sizes.pageInlineMargin,
})
