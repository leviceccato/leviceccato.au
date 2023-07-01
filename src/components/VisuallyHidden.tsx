import { type ParentComponent } from 'solid-js'
import * as css from './VisuallyHidden.css'

export const VisuallyHidden: ParentComponent<{ isFocusable: boolean }> = (
	props,
) => {
	return (
		<span
			class={props.isFocusable ? css.root.focusable : css.root.notFocusable}
		>
			{props.children}
		</span>
	)
}
