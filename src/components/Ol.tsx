import { type ParentComponent } from 'solid-js'
import { Container } from '#/components/Container'
import * as css from './Ol.css'

export const Ol: ParentComponent = (props) => {
	return (
		<Container>
			<ol class={css.root}>{props.children}</ol>
		</Container>
	)
}
