import { style, createVar, fallbackVar } from '@vanilla-extract/css'
import { sizes } from '#/data/theme'

const containerVar = createVar()

export const root = style({
	marginInline: 'auto',
	maxInlineSize: sizes.maxContainerInlineSize,
	// Only allow padding on the root Container
	paddingInline: `calc(${sizes.pageInlineMargin}px * ${fallbackVar(
		containerVar,
		'1',
	)})`,
})

export const wrapper = style({
	vars: {
		[containerVar]: '0',
	},
})
