import { type Component } from 'solid-js'
import { Container } from '#/components/Container'
import * as css from './Logo.css'

export const Logo: Component<{
	src: string
	alt: string
	scale?: number
}> = (props) => {
	props.scale ??= 1

	return (
		<Container class={css.root}>
			<div class={css.main}>
				<img
					class={css.image}
					style={{ transform: `scale(${props.scale})` }}
					src={props.src}
					alt={props.alt}
				/>
			</div>
		</Container>
	)
}
