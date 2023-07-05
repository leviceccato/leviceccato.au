import { type ParentComponent } from 'solid-js'
import * as css from './Text.css'

export const Text: ParentComponent = (props) => {
	return <span class={css.root.default}>{props.children}</span>
}
