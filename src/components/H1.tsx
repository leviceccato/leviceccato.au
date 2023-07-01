import { type ParentComponent } from 'solid-js'
import { Container } from '#/components/Container'
import * as css from './H1.css'

export const H1: ParentComponent = (props) => {
	return (
		<Container>
			<h1 class={css.root}>{props.children}</h1>
		</Container>
	)
}
