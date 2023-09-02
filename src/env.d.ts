/// <reference types="astro/client" />

// smartypants has no types or @types package
declare module 'smartypants' {
	export default function (source: string, options: string): string
}