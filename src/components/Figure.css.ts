import { style, createVar } from '@vanilla-extract/css'
import { sizes } from '#/data/theme'

export const inlineSizeVar = createVar()
export const aspectRatioVar = createVar()

export const root = style({
	marginInline: 'auto',
	paddingInline: sizes.pageInlineMargin,
	inlineSize: inlineSizeVar,
	aspectRatio: aspectRatioVar,
	position: 'relative',
})

export const image = style({
	position: 'absolute',
	inset: 0,
})

export const caption = style({})
