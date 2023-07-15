import { style } from '@vanilla-extract/css'
import { clampVw } from '#/utils/misc'

export const root = style({
	paddingInlineStart: '1.1em',
	position: 'relative',
	lineHeight: 1.45,
	fontSize: clampVw(17, 19),
	'::before': {
		content: '',
		position: 'absolute',
		inset: '0.2em auto 0.15em 0',
		width: 2,
		backgroundColor: 'currentcolor',
	},
})
