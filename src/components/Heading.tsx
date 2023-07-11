import { type ParentComponent, type JSX } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { Container } from '#/components/Container'
import { Text } from '#/components/Text'
import * as css from './Heading.css'

export const Heading: ParentComponent<{
	level: '1' | '2' | '3' | '4' | '5' | '6'
	class?: string
	style?: JSX.CSSProperties
}> = (props) => {
	props.class ??= ''

	return (
		<Container class={props.class}>
			<Dynamic
				component={`h${props.level}`}
				class={css.heading}
				style={props.style}
			>
				<Text variant="block">{props.children}</Text>
			</Dynamic>
		</Container>
	)
}
