import { style } from '@vanilla-extract/css'
import { clampVw } from '#/utils/misc'

export const root = style({
	flex: '1 0 auto',
	paddingBlockStart: clampVw(35, 85),
	paddingBlockEnd: clampVw(50, 175),
})
