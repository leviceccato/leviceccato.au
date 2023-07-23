import { type Component } from 'solid-js'
import { Container } from '#/components/Container'
import * as css from './Logo.css'

export const Logo: Component<{
	class?: string
	svg: string
	padding: string
}> = (props) => {
	props.class ??= ''

	return (
		<Container class={`${css.root} ${props.class}`}>
			<div
				class={css.main}
				style={{ padding: props.padding }}
				innerHTML={props.svg}
			/>
		</Container>
	)
}
