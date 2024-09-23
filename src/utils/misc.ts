export function slugify(text: string): string {
	return (
		text
			// Split accented characters into their base characters and diacritical marks
			.normalize('NFKD')
			// Remove all the accents, which happen to be all in the \u03xx UNICODE block.
			// biome-ignore lint/suspicious/noMisleadingCharacterClass: Not sure, just supress
			.replace(/[\u0300-\u036f]/g, '')
			// Trim leading or trailing whitespace
			.trim()
			// Convert to lowercase
			.toLowerCase()
			// Remove non-alphanumeric characters
			.replace(/[^a-z0-9 -]/g, '')
			// Replace spaces with hyphens
			.replace(/\s+/g, '-')
			// Remove consecutive hyphens
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
