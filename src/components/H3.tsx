import { type ParentComponent } from 'solid-js'
import { Heading } from '#/components/Heading'
import * as css from './H3.css'

export const H3: ParentComponent = (props) => {
	return (
		<Heading
			level="3"
			class={css.root}
			link={true}
		>
			{props.children}
		</Heading>
	)
}
