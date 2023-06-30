import { style } from '@vanilla-extract/css'
import { clampVw } from '#/utils/misc'

export const root = style({
	flexShrink: 0,
	paddingBlockEnd: clampVw(0, 70),
})
