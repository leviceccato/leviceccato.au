import { defaultProps } from '@/utils/solid'
import type { JSX } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import * as css from './clickable.css'

/**
 * A generic clickable component that could act as any element.
 * Event handlers should be defined as they are needed.
 */
export default function Clickable(_props: {
	as: string
	children?: JSX.Element
	class?: string
	attrs?: Record<string, string | undefined>
	onClick?: JSX.HTMLAttributes<HTMLElement>['onclick']
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
