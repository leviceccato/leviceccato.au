import { type ParentComponent } from 'solid-js'
import * as css from './Main.css'

export const Main: ParentComponent<{ id: string }> = (props) => {
	return (
		<main
			id={props.id}
			class={css.root}
		>
			{props.children}
		</main>
	)
}
