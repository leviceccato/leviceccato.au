import { For, Show, type Component } from 'solid-js'
import { A } from '#/components/A'
import * as css from './Nav.css'

export type Column =
	| {
			url: string
			text: string
	  }[]
	| null

export type NavProps = {
	columns: Column[]
	position: 'start' | 'end'
}

export const Nav: Component<NavProps> = (props) => {
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
									>
										{link.text}
									</A>
								)}
							</For>
						</Show>
					</div>
				)}
			</For>
		</nav>
	)
}
