import { type ParentComponent } from 'solid-js'
import { Container } from '#/components/Container'
import * as css from './Ul.css'

export const Ul: ParentComponent = (props) => {
	return (
		<Container>
			<ul class={css.root}>{props.children}</ul>
		</Container>
	)
}
