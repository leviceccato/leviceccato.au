import { type ParentComponent } from 'solid-js'
import { Container } from '#/components/Container'

export const P: ParentComponent = (props) => {
	return (
		<Container>
			<p>{props.children}</p>
		</Container>
	)
}
