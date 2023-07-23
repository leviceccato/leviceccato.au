import { style, globalStyle } from '@vanilla-extract/css'
import { clampVw } from '#/utils/misc'

export const root = style({
	flex: '1 0 auto',
	paddingBlockStart: clampVw(35, 85),
	paddingBlockEnd: clampVw(50, 175),
})

globalStyle(`${root}${root} > *:first-child`, {
	marginBlockStart: 0,
})

globalStyle(`${root}${root} > *:last-child`, {
	marginBlockEnd: 0,
})
