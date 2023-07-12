import { type ParentComponent } from 'solid-js'
import { Container } from '#/components/Container'
import { Text } from '#/components/Text'
import * as css from './P.css'

export const P: ParentComponent = (props) => {
	return (
		<Container>
			<p class={css.paragraph}>
				<Text variant="block">{props.children}</Text>
			</p>
		</Container>
	)
}
