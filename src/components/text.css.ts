import { type Font, fontInterDisplayRegular } from '@/data/fonts'
import { style, styleVariants } from '@vanilla-extract/css'

function createCroppedFont(font: Font, lineHeight: number) {
	return {
		fontWeight: font.weight,
		fontFamily: font.family,
		lineHeight,
		'::before': {
			content: '',
			display: 'block',
			height: 0,
			width: 0,
			marginTop: `calc((${font.top} - ${lineHeight}) * 0.5em)`,
		},
		'::after': {
			content: '',
			display: 'block',
			height: 0,
			width: 0,
			marginBottom: `calc((${font.top} - ${lineHeight}) * 0.5em)`,
		},
	}
}

export const root = style({
	display: 'block',
	fontSize: 'inherit',
	...createCroppedFont(fontInterDisplayRegular, 1.4),
})

export const body = style([
	root,
	{
		...createCroppedFont(fontInterDisplayRegular, 1.4),
	},
])

export const heading = style([
	root,
	{
		fontWeight: 600,
	},
])

export const variant = styleVariants({
	'body-xxs': [
		body,
		{
			fontSize: '1.2rem',
		},
	],
	'body-xs': [
		body,
		{
			fontSize: '1.4rem',
		},
	],
	'body-s': [
		body,
		{
			letterSpacing: '0.01em',
			fontSize: '1.8rem',
		},
	],
	'body-m': [
		body,
		{
			lineHeight: 1.4,
			letterSpacing: '0.01em',
			fontSize: '2rem',
		},
	],
	'heading-xs': [
		heading,
		{
			letterSpacing: '0.6em',
			lineHeight: 1,
			fontSize: '1.6rem',
		},
	],
	'heading-s': [
		heading,
		{
			letterSpacing: '0.6em',
			lineHeight: 1.1,
			fontSize: '1.7rem',
		},
	],
	'heading-m': [
		heading,
		{
			letterSpacing: '0.7em',
			lineHeight: 1.3,
			fontSize: '2.2rem',
		},
	],
})

export type Variant = keyof typeof variant
