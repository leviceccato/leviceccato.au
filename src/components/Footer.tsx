import { type Component } from 'solid-js'
import { Nav, type Column } from '#/components/Nav'
import { Container } from '#/components/Container'
import * as css from './Footer.css'
import { useLocation } from '@solidjs/router'
import { getNextRoute } from '#/data/routes'

const backToTopLink = { url: '#main', text: 'Back to top' }

export const Footer: Component = () => {
	const location = useLocation()

	const columns = () => {
		const c: Column[] = [null, [backToTopLink], null]

		const previousRoute = getNextRoute(location.pathname, -1)
		if (previousRoute) {
			c[0] = [
				{
					url: previousRoute.path,
					text: 'Previous',
				},
			]
		}

		const nextRoute = getNextRoute(location.pathname, 1)
		if (nextRoute) {
			c[0] = [
				{
					url: nextRoute.path,
					text: 'Next',
				},
			]
		}

		return c
	}

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
