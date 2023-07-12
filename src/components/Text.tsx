import { type ParentComponent } from 'solid-js'
import * as css from './Text.css'

type Variant = keyof typeof css.root

export const Text: ParentComponent<{
	variant?: Variant
}> = (props) => {
	props.variant ??= 'inline'

	return <span class={css.root[props.variant]}>{props.children}</span>
}
