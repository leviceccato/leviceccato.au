import { type ParentComponent } from 'solid-js'
import { Text } from '#/components/Text'
import * as css from './Uli.css'

export const Uli: ParentComponent = (props) => {
	return (
		<li class={css.root}>
			<Text>{props.children}</Text>
		</li>
	)
}
