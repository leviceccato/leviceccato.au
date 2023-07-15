import { breakpoints } from '#/data/breakpoints'

export function clampVw(
	minValue: number,
	maxValue: number,
	minVw = breakpoints[0],
	maxVw = breakpoints[100],
): string {
	const slope = (minValue - maxValue) / (minVw - maxVw)
	const intersection = maxValue - slope * maxVw
	const value = `${intersection}px + ${slope * 100}vw`
	return `clamp(${minValue}px, ${value}, ${maxValue}px)`
}

export function minBp(breakpoint: keyof typeof breakpoints): string {
	return `(min-width: ${breakpoints[breakpoint]}px)`
}

export function svgEncode(svgStr: string): string {
	return `data:image/svg+xml,${encodeURIComponent(svgStr)}`
}

export function chunk<TItem>(arr: TItem[], size: number): TItem[][] {
	const result: TItem[][] = []
	while (arr.length > 0) {
		result.push(arr.splice(0, size))
	}
	return result
}

// Based on Flavio Copes' utility.
// See: https://flaviocopes.com/how-to-slugify-a-string-in-javascript/
export function slugify(text: string): string {
	return (
		text
			.trim()
			.toLowerCase()
			// Remove accents, swap ñ for n, etc
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			// Remove invalid characters
			.replace(/[^a-z0-9 -]/g, '')
			// Replace whitespace with a hyphen
			.replace(/\s+/g, '-')
			// Collapse consecutive hyphens
			.replace(/-+/g, '-')
	)
}

// vite-imagetools metadata type, must be manually defined as it isn't exported.
// see: https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
export type Image = {
	src: string
	width: number
	height: number
	format: string
	// The following options are the same as sharps input options
	space: string
	channels: number
	density: Number
	depth: string
	hasAlpha: boolean
	hasProfile: boolean
	isProgressive: boolean
}
