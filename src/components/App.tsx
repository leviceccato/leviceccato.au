import { type Component, Suspense, lazy } from 'solid-js'
import { useRoutes } from '@solidjs/router'
import { routes } from '#/data/routes'

export const App: Component = () => {
	// Remove properties that Solid Router doesn't accept
	const Routes = useRoutes(
		routes.map((route) => ({
			path: route.path,
			component: lazy(route.page),
		})),
	)

	return (
		// Suspense is required for prerendering async
		// routes to work
		<Suspense>
			<Routes />
		</Suspense>
	)
}
