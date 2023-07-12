import { type ParentComponent } from 'solid-js'
import { Heading } from '#/components/Heading'
import * as css from './H2.css'

export const H2: ParentComponent = (props) => {
	return (
		<Heading
			level="2"
			class={css.root}
			link={true}
		>
			{props.children}
		</Heading>
	)
}
