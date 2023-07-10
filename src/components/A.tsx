import { Show, type ParentComponent, mergeProps, type JSX } from 'solid-js'
import { Text } from '#/components/Text'
import { useLocation, useNavigate } from '@solidjs/router'
import * as css from './A.css'

export const A: ParentComponent<{
	href: string
	target?: string
	isInline?: boolean
	class?: string
	// Manually allow setting underline styles, using ems
	// is too unpredictable at smaller sizes and lower
	// pixel densities.
	underlineThickness?: number
	underlineOffset?: number
}> = (props) => {
	const _props = mergeProps({ class: '', isInline: true }, props)

	const { pathname } = useLocation()
	const navigate = useNavigate()

	const isActive = () => {
		if (_props.href === '/') {
			return pathname === _props.href
		}
		return pathname.startsWith(_props.href)
	}

	// Based on Devon Govett's framework independent client side router link utility.
	// See: https://twitter.com/devongovett/status/1672307153699471360
	// This allows A to be used as both a router link or a generic anchor element
	const handleClick: JSX.EventHandler<HTMLAnchorElement, MouseEvent> =
		function (event) {
			const target = event.currentTarget

			if (
				target instanceof HTMLAnchorElement &&
				// Allow setting target to '_self' to opt out of automatic routing behaviour
				(!_props.target || _props.target === '_self') &&
				target.origin === window.location.origin &&
				// Left clicks only
				event.button === 0 &&
				// Open in new tab (macOS)
				!event.metaKey &&
				// Open in new tab (Windows)
				!event.ctrlKey &&
				// Download
				!event.altKey &&
				!event.shiftKey &&
				!event.defaultPrevented
			) {
				event.preventDefault()
				const route = target.href.replace(target.origin, '')
				navigate(route)
			}
		}

	return (
		<a
			class={`${css.root} ${_props.class}`}
			aria-current={isActive() && 'page'}
			href={_props.href}
			onClick={handleClick}
			target={_props.target}
		>
			<Text>
				{_props.children}
				<Show when={isActive()}>
					<span
						aria-hidden
						class={css.activeIndicator}
						textContent=" •"
					/>
				</Show>
			</Text>
		</a>
	)
}
