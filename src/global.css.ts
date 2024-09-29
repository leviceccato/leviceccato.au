import { globalStyle as g } from '@vanilla-extract/css'

/**
 * Rather than include a CSS reset, this project resets styles at the component
 * level. Any reset properties are likely taken from modern-normalize.
 */

/**
 * The following two declarations must be separate to be valid.
 */

g('::selection', {
	backgroundColor: 'var(--color-secondary)',
	color: 'var(--color-primary)',
})

g('::-moz-selection', {
	backgroundColor: 'var(--color-secondary)',
	color: 'var(--color-primary)',
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
	backgroundColor: '',
	color: '',
	blockSize: '200vh',
	/**
	 * Improve text rendering in all browsers.
	 */
	WebkitFontSmoothing: 'antialiased',
	MozOsxFontSmoothing: 'grayscale',
})
