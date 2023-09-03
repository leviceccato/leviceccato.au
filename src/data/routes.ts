export type Meta = {
	title: string
	description: string
	isHidden?: boolean
	posted?: string
	updated?: string
}

export type ResolvedPage = { meta: Meta }

export type Page = () => Promise<ResolvedPage>

const pages = import.meta.glob('../pages/**/*.astro') as Record<string, Page>

export type Route<TPage> = {
	file: string
	url: string
	page: TPage
}

export const routes = Object.entries(pages).map<Route<Page>>(([path, page]) => {
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
		file: path,
		url: '/' + segments.join('/'),
		page,
	}
})

export async function sortRoutes(
	routes: Route<Page>[],
): Promise<Route<ResolvedPage>[]> {
	const resolvedRoutes = await resolveRoutes(routes)

	return resolvedRoutes.sort((a, b) => {
		if (a.page.meta?.posted && b.page.meta?.posted) {
			return Date.parse(b.page.meta.posted) - Date.parse(a.page.meta.posted)
		}

		return a.url.localeCompare(b.url, 'en-AU', { numeric: true })
	})
}

export async function resolveRoutes(
	routes: Route<Page>[],
): Promise<Route<ResolvedPage>[]> {
	const pages = routes.map((route) => route.page)
	const resolvedPages = await Promise.all(pages.map((page) => page()))

	return routes.map((route, index) => ({
		...route,
		page: resolvedPages[index],
	}))
}

export async function getRoute(
	url: string,
): Promise<Route<ResolvedPage> | undefined> {
	return (await sortRoutes(routes)).find((route) => route.url === url)
}

export async function getNextRoute(
	url: string,
	direction: number,
): Promise<Route<ResolvedPage> | undefined> {
	const resolvedRoutes = await sortRoutes(routes)
	const routeIndex = resolvedRoutes.findIndex((route) => route.url === url)
	if (routeIndex === -1) {
		return undefined
	}

	let route = resolvedRoutes[routeIndex + direction]
	while (route?.page.meta?.isHidden) {
		direction += direction
		route = resolvedRoutes[routeIndex + direction]
	}

	return route
}

export async function getChildRoutes(
	url: string,
): Promise<Route<ResolvedPage>[]> {
	const resolvedRoutes = await sortRoutes(routes)
	return resolvedRoutes.filter(
		(route) => route.url !== url && route.url.startsWith(url),
	)
}
