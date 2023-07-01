import { For, Show, type Component } from 'solid-js'
import { A, useLocation } from '@solidjs/router'
import * as css from './Nav.css'

export type Link = {
	url: string
	text: string
}

export type Column = Link[] | null

export type NavProps = {
	columns: Column[]
	position: 'start' | 'end'
}

export const Nav: Component<NavProps> = (props) => {
	const location = useLocation()

	const borderMap = { start: 'borderEnd', end: 'borderStart' } as const

	return (
		<nav class={css.root}>
			<For each={props.columns}>
				{(column) => (
					<div class={css.column[borderMap[props.position]]}>
						<Show when={column}>
							<For each={column}>
								{(link) => (
									<A
										class={css.link}
										href={link.url}
										textContent={link.text}
										activeClass="active"
										aria-current={link.url === location.pathname && 'page'}
									/>
								)}
							</For>
						</Show>
					</div>
				)}
			</For>
		</nav>
	)
}
