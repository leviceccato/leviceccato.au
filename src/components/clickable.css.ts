import { background, foreground } from '@/data/colors'
import { style } from '@vanilla-extract/css'

export const root = style({
	color: 'inherit',
	/**
	 * Custom made cursor
	 */
	cursor: [
		`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='27' fill='${encodeURIComponent(background)}' stroke='${encodeURIComponent(foreground)}' stroke-width='2' stroke-miterlimit='10' viewBox='0 0 24 27'%3E%3Cpath d='M18.991 10.096v0a1.83 1.83 0 00-1.83-1.83h-2.157v0a2.073 2.073 0 00-2.074-2.074h-1.914V3.226a1.994 1.994 0 00-1.994-1.993h0a1.994 1.994 0 00-1.994 1.993v13.086l-2.4-2.4a1.994 1.994 0 00-2.819 0h0a1.994 1.994 0 000 2.82l6.355 6.355a9.246 9.246 0 006.538 2.708h0a8.277 8.277 0 008.277-8.277v-5.592c0-1.01-.82-1.83-1.83-1.83h-2.158z' /%3E%3Cpath d='M11.016 6.192v6.415M18.991 10.096v3.569M15.004 8.265v4.871' /%3E%3C/svg%3E")
		5 0, pointer`,
		`-webkit-image-set(url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='27' fill='${encodeURIComponent(background)}' stroke='${encodeURIComponent(foreground)}' stroke-width='2' stroke-miterlimit='10' viewBox='0 0 24 27'%3E%3Cpath d='M18.991 10.096v0a1.83 1.83 0 00-1.83-1.83h-2.157v0a2.073 2.073 0 00-2.074-2.074h-1.914V3.226a1.994 1.994 0 00-1.994-1.993h0a1.994 1.994 0 00-1.994 1.993v13.086l-2.4-2.4a1.994 1.994 0 00-2.819 0h0a1.994 1.994 0 000 2.82l6.355 6.355a9.246 9.246 0 006.538 2.708h0a8.277 8.277 0 008.277-8.277v-5.592c0-1.01-.82-1.83-1.83-1.83h-2.158z' /%3E%3Cpath d='M11.016 6.192v6.415M18.991 10.096v3.569M15.004 8.265v4.871' /%3E%3C/svg%3E") 1x, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 41' width='36' height='41' fill='${encodeURIComponent(background)}' stroke='${encodeURIComponent(foreground)}' stroke-width='3' stroke-miterlimit='10'%3E%3Cpath d='M28.513 15.599h0a2.746 2.746 0 00-2.746-2.746h-3.236v0a3.11 3.11 0 00-3.11-3.11H16.55V5.295a2.99 2.99 0 00-2.991-2.991h0a2.99 2.99 0 00-2.991 2.991v19.628l-3.599-3.599a2.991 2.991 0 00-4.23 0h0a2.991 2.991 0 000 4.23l9.532 9.532a13.87 13.87 0 009.807 4.062h0c6.857 0 12.415-5.559 12.415-12.415v-8.389a2.744 2.744 0 00-2.744-2.744h-3.236z' /%3E%3Cpath fill='none' d='M16.55 9.743v9.623M28.513 15.599v5.353M22.531 12.853v7.306' /%3E%3C/svg%3E") 2x) 5 0, pointer`,
	],
})
