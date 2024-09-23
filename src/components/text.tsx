import { defaultProps } from '@/utils/solid'
import type { JSX } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import * as css from './text.css'

export default function Text(_props: {
	as?: string
	children?: JSX.Element
	class?: string
	variant: css.Variant
}) {
	const props = defaultProps(_props, { class: '', as: 'span' })

	return (
		<Dynamic
			component={props.as}
			class={`${css.root} ${css.variant[props.variant]} ${props.class}`}
		>
			{props.children}
		</Dynamic>
	)
}
