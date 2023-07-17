import { type Component, For, lazy } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { A } from '#/components/A'
import { Container } from '#/components/Container'
import { useLocation } from '@solidjs/router'
import { getChildRoutes, type Route } from '#/data/routes'

export const Listing: Component = () => {
	const location = useLocation()
	const childRoutes = getChildRoutes(location.pathname)

	return (
		<Container>
			<For each={childRoutes}>
				{(route) => <Dynamic component={createListItem(route)} />}
			</For>
		</Container>
	)
}

// Listing elements must be created like this so they interact properly with
// Suspend and can therefore be prerendered fully.
function createListItem(route: Route) {
	return lazy(async () => {
		const meta = await route.meta()

		return {
			default: () => (
				<>
					<A href={route.path}>{meta.title}</A>
				</>
			),
		}
	})
}
