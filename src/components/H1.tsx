import { type ParentComponent } from 'solid-js'
import { Heading } from '#/components/Heading'
import * as css from './H1.css'

export const H1: ParentComponent = (props) => {
	return (
		<Heading
			level="1"
			class={css.root}
		>
			{props.children}
		</Heading>
	)
}
