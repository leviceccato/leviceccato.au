import { type ParentComponent } from 'solid-js'
import * as css from './Container.css'

export const Container: ParentComponent = (props) => {
	return <div class={css.root}>{props.children}</div>
}
