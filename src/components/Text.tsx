import { mergeProps, type ParentComponent } from 'solid-js'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as css from './Text.css'

type Variant = keyof typeof css.root

export const Text: ParentComponent<{
	variant?: Variant
	lineHeight?: number
}> = (props) => {
	const _props = mergeProps(
		{ lineHeight: 1.4, variant: 'inline' as const },
		props,
	)

	return (
		<span
			class={css.root[_props.variant]}
			style={assignInlineVars({
				[css.lineHeightVar]: String(_props.lineHeight),
			})}
		>
			{_props.children}
		</span>
	)
}
