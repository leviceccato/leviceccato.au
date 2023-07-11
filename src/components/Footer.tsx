import { type Component } from 'solid-js'
import { Nav, type Column } from '#/components/Nav'
import { Container } from '#/components/Container'
import * as css from './Footer.css'
import { useLocation } from '@solidjs/router'
import { getNextRoute } from '#/data/routes'

export const Footer: Component<{
	backToTopLinkUrl: string
}> = (props) => {
	const location = useLocation()

	const columns = () => {
		const c: Column[] = [
			null,
			[{ url: props.backToTopLinkUrl, text: 'Back to top' }],
			null,
		]

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
			c[2] = [
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
