import { breakpoints } from "#/data/breakpoints"

export function rem(pixel: number): string {
	return `${pixel / 16}rem`
}

export function clampVw(
	minValue: number,
	maxValue: number,
	minVw = breakpoints[0],
	maxVw = breakpoints[100],
): string {
	const slope = (minValue - maxValue) / (minVw - maxVw)
	const intersection = maxValue - slope * maxVw
	const _value = `${intersection}px + ${slope * 100}vw`
	return `clamp(${minValue}px, ${_value}, ${maxValue}px)`
}

export function minBp(breakpoint: keyof typeof breakpoints): string {
	return `(min-width: ${breakpoints[breakpoint]}px)`
}