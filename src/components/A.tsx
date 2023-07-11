import { Show, type ParentComponent, type JSX } from 'solid-js'
import { Text } from '#/components/Text'
import { useLocation, useNavigate } from '@solidjs/router'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as css from './A.css'

export const A: ParentComponent<{
	href: string
	target?: string
	isInline?: boolean
	enableActiveIndicator?: boolean
	class?: string
	// Allow manually setting underline styles, using ems
	// is too unpredictable at smaller sizes and lower
	// pixel densities.
	underlineThickness?: number
	underlineOffset?: number
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

	const vars = () => {
		const vars: Record<string, string> = {}

		if (props.underlineOffset !== undefined) {
			vars[css.textUnderlineOffsetVar] = String(props.underlineOffset)
		}

		if (props.underlineThickness !== undefined) {
			vars[css.textDecorationThicknessVar] = String(props.underlineThickness)
		}

		return assignInlineVars(vars)
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

	return (
		<a
			class={`${css.root} ${props.class}`}
			aria-current={isActive() && 'page'}
			href={props.href}
			onClick={handleClick}
			target={props.target}
			style={vars()}
		>
			<Text>
				<span class={css.main}>{props.children}</span>
				<Show when={props.enableActiveIndicator && isActive()}>
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
