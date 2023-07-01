import { style } from '@vanilla-extract/css'
import { clampVw } from '#/utils/misc'

export const root = style({
	display: 'block',
	fontWeight: 700,
	letterSpacing: '-0.03em',
	lineHeight: 1.15,
	fontSize: clampVw(33, 47),
	// @include lh-crop(1.15);
})
