import { type Component, createEffect, createSignal } from 'solid-js'
import { Nav, type Column } from '#/components/Nav'
import { Container } from '#/components/Container'
import * as css from './Footer.css'
import { useLocation } from '@solidjs/router'
import { getNextRoute } from '#/data/routes'

const backToTopLink = { url: '#main', text: 'Back to top' }

export const Footer: Component = () => {
	const location = useLocation()

	const [columns, setColumns] = createSignal<Column[]>([
		null,
		[backToTopLink],
		null,
	])

	createEffect(() => {
		const previousRoute = getNextRoute(location.pathname, -1)
		const nextRoute = getNextRoute(location.pathname, 1)

		const previousLink = previousRoute
			? [
					{
						url: previousRoute.path,
						text: 'Previous',
					},
			  ]
			: null
		const nextLink = nextRoute
			? [
					{
						url: nextRoute.path,
						text: 'Next',
					},
			  ]
			: null

		setColumns([previousLink, [backToTopLink], nextLink])
	})

	return (
		<footer class={css.root}>
			<Container>
				<Nav
					position="end"
					columns={columns()}
				/>
			</Container>
		</footer>
	)
}
