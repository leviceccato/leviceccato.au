import { fontFace, globalStyle as g } from '@vanilla-extract/css'

export type Font = {
	weight: number
	top: number
	bottom: number
	family: string
}

export const fontInterDisplaySemibold = {
	weight: 600,
	top: 0.85,
	bottom: 0.85,
	family: fontFace({
		src: 'local("Inter Display"), url("interdisplay-semibold.woff2") format("woff2"), url("interdisplay-semibold.woff") format("woff")',
	}),
} satisfies Font

export const fontInterDisplayRegular = {
	weight: 400,
	top: 0.85,
	bottom: 0.85,
	family: fontFace({
		src: 'local("Inter Display"), url("interdisplay-regular.woff2") format("woff2"), url("interdisplay-regular.woff") format("woff")',
	}),
} satisfies Font

g('html', {
	/**
	 * By setting the root font size to this value we can use 1rem, 2rem,
	 * 3rem etc to represent 10px, 20px, 30px respectively.
	 */
	fontSize: '0.625rem',
})

g('body', {
	backgroundColor: '',
	color: '',
	blockSize: '200vh',
	WebkitFontSmoothing: 'antialiased',
	MozOsxFontSmoothing: 'grayscale',
})
