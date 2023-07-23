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
			[
				{
					url: props.backToTopLinkUrl,
					text: 'Back to top',
					onClick: () => {
						// The hash URL will ensure scrolling to top without JavaScript works
						// but this will only work on the first click. Subsequent clicks
						// require this supplementary code.
						window.scrollTo({ top: 0 })
					},
				},
			],
			null,
		]

		const previousRoute = getNextRoute(location.pathname, -1)
		if (previousRoute) {
			c[0] = [
				{
					url: previousRoute.path,
					text: 'Previous',
					disableIndicator: true,
				},
			]
		}

		const nextRoute = getNextRoute(location.pathname, 1)
		if (nextRoute) {
			c[2] = [
				{
					url: nextRoute.path,
					text: 'Next',
					disableIndicator: true,
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
