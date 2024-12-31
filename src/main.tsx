import '@/global.css'
import { routes } from '@/data/routes'
import { type RouteDefinition, Router } from '@solidjs/router'
import { Suspense, lazy } from 'solid-js'
import { hydrate, render } from 'solid-js/web'

export function createApp(url?: string, routes?: RouteDefinition[]) {
	return () => (
		<Suspense>
			<Router url={url}>{routes}</Router>
		</Suspense>
	)
}

if (!import.meta.env.SSR) {
	const transformedRoutes = routes.map((route) => {
		return {
			path: route.path,
			component: lazy(route.page),
		}
	})
	const app = createApp('', transformedRoutes)

	if (import.meta.env.DEV) {
		render(app, document.body)
	} else {
		hydrate(app, document.body)
	}
}
