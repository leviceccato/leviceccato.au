import { type ParentComponent, mergeProps } from 'solid-js'
import * as css from './Container.css'

export const Container: ParentComponent<{
	class?: string
}> = (props) => {
	const _props = mergeProps({ class: '' }, props)

	return <div class={`${css.root} ${_props.class}`}>{_props.children}</div>
}
