import { style } from '@vanilla-extract/css'

export const root = style({
	paddingInlineStart: '1.1em',
	position: 'relative',
	'::before': {
		content: '',
		position: 'absolute',
		insetBlockStart: '0.6em',
		insetInlineStart: '0.05em',
		inlineSize: 5,
		blockSize: 5,
		display: 'inline-block',
		borderRadius: '50%',
		backgroundColor: 'currentColor',
	},
})
