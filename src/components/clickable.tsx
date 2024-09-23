import { defaultProps } from '@/utils/solid'
import type { JSX } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import * as css from './clickable.css'

export default function Clickable(_props: {
	as: string
	children?: JSX.Element
	class?: string
	attrs?: Record<string, string | undefined>
}) {
	const props = defaultProps(_props, { class: '', attrs: {} })

	return (
		<Dynamic
			component={props.as}
			class={`${props.class} ${css.root}`}
			{...props.attrs}
		>
			{props.children}
		</Dynamic>
	)
}
