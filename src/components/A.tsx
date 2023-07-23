import { Show, type ParentComponent, type JSX } from 'solid-js'
import { Text } from '#/components/Text'
import { useLocation, useNavigate } from '@solidjs/router'
import * as css from './A.css'

export type ClickHandler = JSX.EventHandler<HTMLAnchorElement, MouseEvent>

export const A: ParentComponent<{
	href: string
	target?: string
	isInline?: boolean
	enableActiveIndicator?: boolean
	class?: string
	onClick?: ClickHandler
}> = (props) => {
	props.class ??= ''
	props.isInline ??= true
	props.enableActiveIndicator ??= true

	const { pathname } = useLocation()
	const navigate = useNavigate()

	const isActive = () => {
		if (props.href === '/') {
			return pathname === props.href
		}

		return pathname.startsWith(props.href)
	}

	// Based on Devon Govett's framework independent client side router link utility.
	// See: https://twitter.com/devongovett/status/1672307153699471360
	// This allows A to be used as both a router link or a generic anchor element
	const handleClick: ClickHandler = function (event) {
		const target = event.currentTarget

		if (
			target instanceof HTMLAnchorElement &&
			// Allow setting target to '_self' to opt out of automatic routing behaviour
			(!props.target || props.target === '_self') &&
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
			// navigate must take a relative URL
			const route = target.href.replace(target.origin, '')
			navigate(route)
		}
	}

	const _handleClick: ClickHandler = function (event) {
		props.onClick?.(event)
		handleClick(event)
	}

	return (
		<a
			class={`${css.root} ${props.class}`}
			aria-current={isActive() && 'page'}
			href={props.href}
			onClick={_handleClick}
			target={props.target}
		>
			<Text>
				<span class={css.main}>{props.children}</span>
				<Show when={props.enableActiveIndicator && isActive()}>
					<span
						aria-hidden="true"
						class={css.activeIndicator}
						textContent=" •"
					/>
				</Show>
			</Text>
		</a>
	)
}
