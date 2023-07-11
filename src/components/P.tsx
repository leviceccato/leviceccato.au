import { type ParentComponent } from 'solid-js'
import { Container } from '#/components/Container'
import { Text } from '#/components/Text'
import * as css from './P.css'

export const P: ParentComponent = (props) => {
	return (
		<Container>
			<Text>
				<p class={css.paragraph}>{props.children}</p>
			</Text>
		</Container>
	)
}
