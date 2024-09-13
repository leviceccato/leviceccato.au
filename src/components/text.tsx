import { createDefaultProps } from '@/primitives/default-props'
import type { JSX } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import * as css from './text.css'

export default function Text(_props: {
	tag?: string
	children?: JSX.Element
	class?: string
	is: css.Variant
}) {
	const props = createDefaultProps(_props, { class: '', tag: 'span' })

	return (
		<Dynamic
			component={props.tag}
			class={`${css.root} ${css.variant[props.is]} ${props.class}`}
		>
			{props.children}
		</Dynamic>
	)
}
