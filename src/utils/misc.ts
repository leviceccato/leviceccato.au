/**
 * All generic utility functions or types should be defined in this file.
 */

export function slugify(text: string): string {
	return (
		text
			/**
			 * 1. Split accented characters into their base characters and diacritical marks
			 * 2. Remove all the accents, which happen to be all in the \u03xx UNICODE block.
			 * 3. Trim leading or trailing whitespace
			 * 4. Convert to lowercase
			 * 5. Remove non-alphanumeric characters
			 * 6. Replace spaces with hyphens
			 * 7. Remove consecutive hyphens
			 */
			.normalize('NFKD')
			// biome-ignore lint:
			.replace(/[\u0300-\u036f]/g, '')
			.trim()
			.toLowerCase()
			.replace(/[^a-z0-9 -]/g, '')
			.replace(/\s+/g, '-')
			.replace(/-+/g, '-')
	)
}

export function areUrlsSameOrigin(
	maybeUrl: string | URL,
	maybeOtherUrl: string | URL,
): boolean {
	try {
		const url = maybeUrl instanceof URL ? maybeUrl : new URL(maybeUrl)
		const otherUrl =
			maybeOtherUrl instanceof URL ? maybeOtherUrl : new URL(maybeOtherUrl)

		return url.origin === otherUrl.origin
	} catch {
		return false
	}
}
