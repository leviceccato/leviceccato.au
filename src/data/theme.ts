import { svgEncode } from '#/utils/misc'

export const colours = {
	fg: 'black',
	bg: '#ebebeb',
}

export const sizes = {
	pageInlineMargin: 18,
	maxContainerInlineSize: 550,
	columnGap: 6,
}

// Custom cursors. The 2x image is actually 1.5x because it looks better for some reason.
// Hi DPI versions not showing correctly on firefox.

export const cursors = {
	arrow1X: svgEncode(
		`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="26" viewBox="0 0 17 26" stroke="${colours.fg}" fill="${colours.bg}" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10"><path d="M13.12 14.99L1.02 2.88V22.7a1.82 1.82 0 003.1 1.28L8.12 20h5.62a1.82 1.82 0 001.3-3.11l-1.91-1.9z" /></svg>`,
	),
	arrow1P5X: svgEncode(
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 39" width="25" height="39" stroke="${colours.fg}" fill="${colours.bg}" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10"><path d="M19.75 22.99L1.59 4.83v29.71a2.73 2.73 0 004.67 1.94l5.97-5.97h8.44a2.73 2.73 0 001.93-4.67l-2.85-2.85z" /></svg>`,
	),
	pointer1X: svgEncode(
		`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" stroke="${colours.fg}" fill="${colours.bg}" stroke-width="2" stroke-miterlimit="10" viewBox="0 0 24 27"><path d="M18.991 10.096v0a1.83 1.83 0 00-1.83-1.83h-2.157v0a2.073 2.073 0 00-2.074-2.074h-1.914V3.226a1.994 1.994 0 00-1.994-1.993h0a1.994 1.994 0 00-1.994 1.993v13.086l-2.4-2.4a1.994 1.994 0 00-2.819 0h0a1.994 1.994 0 000 2.82l6.355 6.355a9.246 9.246 0 006.538 2.708h0a8.277 8.277 0 008.277-8.277v-5.592c0-1.01-.82-1.83-1.83-1.83h-2.158z" /><path d="M11.016 6.192v6.415M18.991 10.096v3.569M15.004 8.265v4.871" /></svg>`,
	),
	pointer1P5X: svgEncode(
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 41" width="36" height="41" stroke="${colours.fg}" fill="${colours.bg}" stroke-width="3" stroke-miterlimit="10"><path d="M28.513 15.599h0a2.746 2.746 0 00-2.746-2.746h-3.236v0a3.11 3.11 0 00-3.11-3.11H16.55V5.295a2.99 2.99 0 00-2.991-2.991h0a2.99 2.99 0 00-2.991 2.991v19.628l-3.599-3.599a2.991 2.991 0 00-4.23 0h0a2.991 2.991 0 000 4.23l9.532 9.532a13.87 13.87 0 009.807 4.062h0c6.857 0 12.415-5.559 12.415-12.415v-8.389a2.744 2.744 0 00-2.744-2.744h-3.236z" /><path fill="none" d="M16.55 9.743v9.623M28.513 15.599v5.353M22.531 12.853v7.306" /></svg>`,
	),
}
