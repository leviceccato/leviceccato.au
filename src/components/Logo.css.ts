import { style } from '@vanilla-extract/css'
import { colours } from '#/data/theme'

export const root = style({
	marginBlockStart: '3em',
	':last-of-type': {
		marginBlockEnd: '3em',
	},
	get selectors() {
		return {
			[`${root} + ${root}`]: {
				marginBlockStart: 2,
			},
		}
	},
})

export const main = style({
	backgroundColor: colours.fg,
	aspectRatio: '1',
	display: 'flex',
	placeItems: 'center',
})
