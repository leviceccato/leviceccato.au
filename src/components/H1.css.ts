import { style } from '@vanilla-extract/css'
import { clampVw } from '#/utils/misc'

export const root = style({
	letterSpacing: '-0.03em',
	lineHeight: 1.15,
	fontSize: clampVw(33, 47),
})
