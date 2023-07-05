import { type ParentComponent, mergeProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { Container } from '#/components/Container'
import { Text } from '#/components/Text'
import * as css from './Heading.css'

export const Heading: ParentComponent<{
	level: '1' | '2' | '3' | '4' | '5' | '6'
	class?: string
}> = (props) => {
	const _props = mergeProps({ class: '' }, props)

	return (
		<Container class={_props.class}>
			<Dynamic
				component={`h${_props.level}`}
				class={css.heading}
			>
				<Text variant="block">{_props.children}</Text>
			</Dynamic>
		</Container>
	)
}
