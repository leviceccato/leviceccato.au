import { type ParentComponent } from 'solid-js'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as css from './Text.css'

type Variant = keyof typeof css.root

export const Text: ParentComponent<{
	variant?: Variant
	lineHeight?: number
}> = (props) => {
	props.variant ??= 'inline'

	return (
		<span
			class={css.root[props.variant]}
			style={{
				...(props.lineHeight
					? assignInlineVars({
							[css.lineHeightVar]: String(props.lineHeight),
					  })
					: {}),
			}}
		>
			{props.children}
		</span>
	)
}
