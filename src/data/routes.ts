const pages = import.meta.glob(
	['../pages/**/*.astro', '!**/_*', '!**/_*.astro'],
	{
		eager: true,
		import: 'isHidden',
	},
)

export type Route = {
	filePath: string
	path: string
	isHidden: boolean
}

export const routes = Object.entries(pages).map<Route>(([path, isHidden]) => {
	let segments = path.split('/')

	// Get segments relative to 'pages', e.g; ['about', 'index.astro']
	segments = segments.slice(segments.indexOf('pages') + 1, segments.length + 1)

	segments = segments.flatMap((segment, index) => {
		// Remove file extension
		if (index === segments.length - 1) {
			;[segment] = segment.split('.')
		}

		// Ignore indexes
		if (segment === 'index') {
			return []
		}

		return [segment]
	})

	return {
		path: '/' + segments.join('/'),
		filePath: path,
		isHidden: Boolean(isHidden),
	}
})

export function getRoute(path: string): Route | undefined {
	return routes.find((route) => route.path === path)
}

export function getNextRoute(
	path: string,
	direction: number,
): Route | undefined {
	const routeIndex = routes.findIndex((route) => route.path === path)
	if (routeIndex === -1) {
		return undefined
	}

	let route = routes[routeIndex + direction]
	while (route?.isHidden) {
		direction += direction
		route = routes[routeIndex + direction]
	}

	return route
}

export function getChildRoutes(path: string): Route[] {
	return routes.filter(
		(route) => route.path !== path && route.path.startsWith(path),
	)
}
