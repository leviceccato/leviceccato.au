import { style, styleVariants, fontFace } from '@vanilla-extract/css'

const manrope = fontFace([
	{
		fontWeight: 500,
		fontStyle: 'normal',
		src: 'url("/fonts/manrope-medium.woff2") format("woff2"), url("/fonts/manrope-medium.woff") format("woff")',
	},
	{
		fontWeight: 700,
		fontStyle: 'normal',
		src: 'url("/fonts/manrope-bold.woff2") format("woff2"), url("/fonts/manrope-bold.woff") format("woff")',
	},
])

const rootBase = style({
	display: 'block',
	fontSize: 'inherit',
})

export const root = styleVariants({
	default: [
		rootBase,
		{
			...createCroppedFont(manrope, 500, 0.8, 0.8, 1.4),
		},
	],
	bold: [
		rootBase,
		{
			...createCroppedFont(manrope, 700, 0.8, 0.8, 1.4),
		},
	],
})

function createCroppedFont(
	family: string,
	weight: number,
	top: number,
	bottom: number,
	lineHeight: number,
) {
	return {
		fontWeight: weight,
		fontFamily: family,
		lineHeight,
		'::before': {
			content: '',
			display: 'block',
			height: 0,
			width: 0,
			marginTop: `calc((${top} - ${lineHeight}) * 0.5em)`,
		},
		'::after': {
			content: '',
			display: 'block',
			height: 0,
			width: 0,
			marginBottom: `calc((${bottom} - ${lineHeight}) * 0.5em)`,
		},
	}
}
