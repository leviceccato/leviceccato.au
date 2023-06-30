import { type Component, For } from 'solid-js'
import { A, useLocation } from '@solidjs/router'
import * as css from './Header.css'

export const Header: Component<{
	id: string
	// An destination for the skip link must be specified
	skipLinkUrl: string
	nav: { text: string; url: string }[][]
}> = (props) => {
	const location = useLocation()

	return (
		<header id={props.id}>
			<a
				class="Skip VisuallyHidden focusable"
				href={props.skipLinkUrl}
			>
				Skip to main content
			</a>
			<nav class={css.nav}>
				<For each={props.nav}>
					{(column) => (
						<div class={css.column}>
							<For each={column}>
								{(item) => (
									<A
										class={css.link}
										href={item.url}
										textContent={item.text}
										activeClass="active"
										aria-current={item.url === location.pathname && 'page'}
									/>
								)}
							</For>
						</div>
					)}
				</For>
			</nav>
		</header>
	)
}
