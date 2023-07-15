import { style } from '@vanilla-extract/css'
import { clampVw } from '#/utils/misc'

export const root = style({
	counterReset: 'counter',
	display: 'flex',
	flexDirection: 'column',
	gap: clampVw(7, 15),
})
