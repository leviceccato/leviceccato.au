import { style } from '@vanilla-extract/css'
import { clampVw } from '#/utils/misc'

export const root = style({
	display: 'flex',
	flexDirection: 'column',
	gap: clampVw(7, 15),
})
