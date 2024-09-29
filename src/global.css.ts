import { background, foreground } from '@/data/colors'
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
 * Any reset properties are likely taken from modern-normalize.
 *
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
 * Using `:where()` to ensure 0 specificity.
 */
g(':where(*, ::before, ::after)', {
	/**
	 * Saner `box-sizing` default.
	 */
	boxSizing: 'border-box',
	/**
	 * Custom made cursor.
	 */
	cursor: [
		`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='26' viewBox='0 0 17 26' stroke='${encodeURIComponent(foreground)}' fill='${encodeURIComponent(background)}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10'%3E%3Cpath d='M13.12 14.99L1.02 2.88V22.7a1.82 1.82 0 003.1 1.28L8.12 20h5.62a1.82 1.82 0 001.3-3.11l-1.91-1.9z' /%3E%3C/svg%3E"), default`,
		`-webkit-image-set(url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='26' viewBox='0 0 17 26' stroke='${encodeURIComponent(foreground)}' fill='${encodeURIComponent(background)}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10'%3E%3Cpath d='M13.12 14.99L1.02 2.88V22.7a1.82 1.82 0 003.1 1.28L8.12 20h5.62a1.82 1.82 0 001.3-3.11l-1.91-1.9z' /%3E%3C/svg%3E") 1x, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 39' width='25' height='39' fill='${encodeURIComponent(background)}' stroke='${encodeURIComponent(foreground)}' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10'%3E%3Cpath d='M19.75 22.99L1.59 4.83v29.71a2.73 2.73 0 004.67 1.94l5.97-5.97h8.44a2.73 2.73 0 001.93-4.67l-2.85-2.85z' /%3E%3C/svg%3E") 2x), default`,
	],
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

g(':where(h1, h2, h3, h4, h5, h6, p)', {
	margin: 0,
})
