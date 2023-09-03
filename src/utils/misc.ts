import smartypants from 'smartypants'
import { breakpoint0, breakpoint100 } from '../data/theme'

export function svgEncode(svgStr: string): string {
	return `url(data:image/svg+xml,${encodeURIComponent(svgStr)})`
}

export function clampVw(
	minValue: number,
	maxValue: number,
	minVw = breakpoint0,
	maxVw = breakpoint100,
): string {
	const slope = (minValue - maxValue) / (minVw - maxVw)
	const intersection = maxValue - slope * maxVw
	const value = `${intersection}px + ${slope * 100}vw`
	return `clamp(${minValue}px, ${value}, ${maxValue}px)`
}

export function improveTypography(str: string): string {
	// See https://github.com/othree/smartypants.js for options
	return smartypants(str, '2')
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

// Format Date to string for use in blog
export function formatDate(date: Date): string {
	const day = date.getUTCDay()
	const month = new Intl.DateTimeFormat('en-AU', {
		month: 'short',
	}).format(date)
	const year = date.getUTCFullYear()

	return `${day} ${month} ${year}`
}
