import { Show, type ParentComponent, mergeProps } from 'solid-js'
import { A as SolidA, useLocation } from '@solidjs/router'
import * as css from './A.css'

export const A: ParentComponent<{
	href: string
	isInline?: boolean
	class?: string
}> = (props) => {
	const _props = mergeProps({ isInline: true }, props)

	const { pathname } = useLocation()

	const isActive = () => {
		if (_props.href === '/') {
			return pathname === _props.href
		}
		return pathname.startsWith(_props.href)
	}

	return (
		<SolidA
			class={`${css.root} ${_props.class ?? ''}`}
			aria-current={isActive() && 'page'}
			href={_props.href}
		>
			{_props.children}
			<Show when={isActive()}>
				<span
					aria-hidden
					class={css.activeIndicator}
				>
					{' '}
					•
				</span>
			</Show>
		</SolidA>
	)
}