import { type ParentComponent } from 'solid-js'
import { Container } from '#/components/Container'
import { Text } from '#/components/Text'
import * as css from './H1.css'

export const H1: ParentComponent = (props) => {
	return (
		<Container>
			<h1 class={css.root}>
				<Text
					lineHeight={1.15}
					variant="block"
				>
					{props.children}
				</Text>
			</h1>
		</Container>
	)
}
