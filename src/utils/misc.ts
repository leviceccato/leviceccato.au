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

export function parseImagePath(path: string): {
	format: string
	width?: number
	path: string
} {
	const pathSegments = path.split('/')
	const file = pathSegments[pathSegments.length - 1]
	const [name, ext] = file.split('.')

	if (ext !== 'jpeg' && ext !== 'png') {
		throw new Error(`Invalid image path: ${path}`)
	}

	let format = ext
	let width: undefined | number = undefined

	const [_, ...params] = name.split('_')
	if (params) {
		params.forEach((param) => {
			const [key, value] = param.split('-')

			if (key === 'w') {
				width = Number(value)
			}
		})
	}

	return {
		format,
		width,
		path: `${pathSegments.slice(0, -1).join('/')}/${name}`,
	}
}
