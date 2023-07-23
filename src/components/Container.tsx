import { type ParentComponent } from 'solid-js'
import * as css from './Container.css'

export const Container: ParentComponent<{
	class?: string
}> = (props) => {
	props.class ??= ''

	return (
		<div class={`${css.root} ${props.class}`}>
			<div class={css.wrapper}>{props.children}</div>
		</div>
	)
}
