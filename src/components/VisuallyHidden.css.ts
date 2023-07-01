import {
	style,
	styleVariants,
	type ComplexStyleRule,
} from '@vanilla-extract/css'

const rootBase = style({})

const hiddenStyle: ComplexStyleRule = {
	border: 0,
	clip: 'rect(0 0 0 0)',
	blockSize: 1,
	margin: -1,
	overflow: 'hidden',
	padding: 0,
	position: 'absolute',
	inlineSize: 1,
}

export const root = styleVariants({
	notFocusable: [rootBase, hiddenStyle],
	focusable: [
		rootBase,
		{
			selectors: {
				'&:not(:focus-within)': hiddenStyle,
			},
		},
	],
})
