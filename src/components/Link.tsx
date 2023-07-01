import { Show, type ParentComponent } from 'solid-js'
import { A, useLocation } from '@solidjs/router'
import * as css from './Link.css'

export const Link: ParentComponent<{
	href: string
	class?: string
}> = (props) => {
	const location = useLocation()

	const isActive = () => props.href === location.pathname

	return (
		<A
			class={`${css.root} ${props.class ?? ''}`}
			aria-current={isActive() && 'page'}
			href={props.href}
		>
			{props.children}
			<Show when={isActive()}>
				<span aria-hidden> ●</span>
			</Show>
		</A>
	)
}
