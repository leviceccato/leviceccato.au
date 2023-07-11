import {
	style,
	createVar,
	fallbackVar,
	styleVariants,
	fontFace,
} from '@vanilla-extract/css'

export const lineHeightVar = createVar()

const defaultLineHeight = '1.4'

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
	fontSize: 'inherit',
	cursor: 'inherit',
	fontFamily: manrope,
})

export const root = styleVariants({
	inline: [rootBase],
	block: [
		rootBase,
		{
			display: 'block',
			lineHeight: fallbackVar(lineHeightVar, defaultLineHeight),
			'::before': {
				content: '',
				display: 'block',
				height: 0,
				width: 0,
				// 0.75 is specific to the Manrope font
				marginTop: `calc((0.75 - ${fallbackVar(
					lineHeightVar,
					defaultLineHeight,
				)}) * 0.5em)`,
			},
			'::after': {
				content: '',
				display: 'block',
				height: 0,
				width: 0,
				// 1.25 is specific to the Manrope font
				marginBottom: `calc((1.25 - ${fallbackVar(
					lineHeightVar,
					defaultLineHeight,
				)}) * 0.5em)`,
			},
		},
	],
})
