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
		src: 'local("Inter Display"), url("/fonts/interdisplay-semibold.woff2") format("woff2"), url("/fonts/interdisplay-semibold.woff") format("woff")',
	}),
} satisfies Font

export const fontInterDisplayRegular = {
	weight: 400,
	top: 0.85,
	bottom: 0.85,
	family: fontFace({
		src: 'local("Inter Display"), url("/fonts/interdisplay-regular.woff2") format("woff2"), url("/fonts/interdisplay-regular.woff") format("woff")',
	}),
} satisfies Font

/**
 * Rather than include a CSS reset, this project resets styles at the component
 * level. Any reset properties are likely taken from modern-normalize.
 */

/**
 * The following two declarations must be separate to be valid.
 */

g('::selection', {
	backgroundColor: 'var(--color-foreground)',
	color: 'var(--color-background)',
})

g('::-moz-selection', {
	backgroundColor: 'var(--color-foreground)',
	color: 'var(--color-background)',
})

/**
 * Opininated change to default box model.
 */
g('*, ::before, ::after', {
	boxSizing: 'border-box',
})

g('html', {
	/**
	 * By setting the root font size to this value we can use 1rem, 2rem,
	 * 3rem etc to represent 10px, 20px, 30px respectively.
	 */
	fontSize: '0.625rem',
	/**
	 * Prevent adjustments of font size after orientation changes in iOS.
	 */
	WebkitTextSizeAdjust: '100%',
})

g('body', {
	margin: 0,
	/**
	 * Setting background colour on body so that we can get nice overflow
	 * bleed in Safari.
	 */
	backgroundColor: 'var(--color-background)',
	color: 'var(--color-foreground)',
	blockSize: '200vh',
	/**
	 * Improve text rendering in all browsers.
	 */
	WebkitFontSmoothing: 'antialiased',
	MozOsxFontSmoothing: 'grayscale',
})
