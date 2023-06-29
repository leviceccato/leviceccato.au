import * as t from '#/utils/toolkit'
import { For } from 'solid-js'
import { A, useLocation } from '@solidjs/router'

export default t.component<{
	id: string
	// An ID for the skip link must be specified
	endId: string
	nav: { text: string; url: string }[][]
}>((props) => {
	const location = useLocation()

	return (
		<>
			<a
				class="Skip VisuallyHidden focusable"
				href={'#' + props.endId}
			>
				Skip to main content
			</a>
			<header
				class="Header"
				id={props.id}
			>
				<nav class="Header-nav">
					<For each={props.nav}>
						{(column) => (
							<div class="Header-column">
								<For each={column}>
									{(item) => (
										<A
											class="Header-link"
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
			<span
				id={props.endId}
				tabindex="-1"
			/>
		</>
	)
})
