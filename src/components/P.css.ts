import { style } from '@vanilla-extract/css'
import { clampVw } from '#/utils/misc'
import { defaultTextDecorationLineVar } from '#/components/A.css'

export const paragraph = style({
	lineHeight: 1.5,
	fontSize: clampVw(16, 17),
	vars: {
		[defaultTextDecorationLineVar]: 'underline',
	},
})
