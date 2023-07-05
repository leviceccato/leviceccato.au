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
