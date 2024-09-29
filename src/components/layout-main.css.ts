import { style } from '@vanilla-extract/css'

export const nav = style({
	position: 'fixed',
	insetInlineStart: '2rem',
	insetBlockStart: '2rem',
	display: 'flex',
	gap: '2rem',
})

export const link = style({
	padding: '1rem',
	margin: '-1rem',
})

export const section = style({
	padding: '7rem 2rem 2rem 2rem',
	display: 'flex',
	flexDirection: 'column',
	gap: '2.5rem',
})
