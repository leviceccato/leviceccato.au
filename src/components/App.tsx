import { type Component, Suspense } from 'solid-js'
import { useRoutes } from '@solidjs/router'
import { routes } from '#/utils/routes'

export const App: Component = () => {
	const Routes = useRoutes(routes)

	return (
		// Suspense is required for prerendering async
		// routes to work
		<Suspense>
			<Routes />
		</Suspense>
	)
}
