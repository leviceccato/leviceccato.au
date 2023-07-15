import { type ParentComponent } from 'solid-js'
import { Container } from '#/components/Container'
import * as css from './Quote.css'

export const Quote: ParentComponent = (props) => {
	return (
		<Container>
			<blockquote class={css.root}>{props.children}</blockquote>
		</Container>
	)
}
