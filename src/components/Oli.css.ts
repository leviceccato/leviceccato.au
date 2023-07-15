import { style } from '@vanilla-extract/css'

export const root = style({
	paddingInlineStart: '1.1em',
	position: 'relative',
	counterIncrement: 'bold-counter',
	'::before': {
		content: 'counter(bold-counter)',
		position: 'absolute',
		fontSize: '0.7em',
		fontWeight: 700,
		insetBlockStart: '0.4em',
		insetInlineStart: '-0.1em',
		display: 'inline-block',
	},
})

// {
// 	'::before': {
// 		content: '',
// 		position: 'absolute',
// 		insetBlockStart: '0.6em',
// 		insetInlineStart: '0.05em',
// 		inlineSize: 5,
// 		blockSize: 5,
// 		display: 'inline-block',
// 		borderRadius: '50%',
// 		backgroundColor: 'currentcolor',
// 	},
// },
