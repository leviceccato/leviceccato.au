// This file is responsible for transforming the files in 'routes' to an array
// of routes that can be utilised by Solid's client and for prerendering

import { lazy, type Component } from 'solid-js'
import { type RouteDefinition } from '@solidjs/router'

export type RouteMeta = {
	isHidden?: boolean
}

// Route modules are imported lazily
const routeModules = import.meta.glob<{ default: Component<any> }>(
	'../routes/**/*_*.tsx',
)

// Route metas are imported statically (this will be treeshaken)
const routeMetas = import.meta.glob<RouteMeta>('../routes/**/*_*.tsx', {
	import: 'meta',
	eager: true,
})

type Route = Pick<RouteDefinition, 'component' | 'path'> & {
	meta: RouteMeta
	filePath: string
}

// First transform into object so that metas can be accessed from a
// provided route path
export const routes = Object.entries(routeModules)
	.sort(([a], [b]) => a.localeCompare(b, 'en-AU', { numeric: true }))
	.map<Route>(([path, mod]) => {
		let segments = path.split('/')

		// Get segments relative to 'routes', e.g; ['about', '_index.tsx']
		segments = segments.slice(
			segments.indexOf('routes') + 1,
			segments.length + 1,
		)

		// Remove number and or underscores
		segments = segments.map((segment) => segment.split('_')[1])

		const fileIndex = segments.length - 1
		// Remove '.tsx'
		segments[fileIndex] = segments[fileIndex].split('.')[0]
		// Index files segments should be removed
		if (segments[fileIndex] === 'index') {
			segments.pop()
		}

		return {
			filePath: path,
			meta: routeMetas[path],
			path: '/' + segments.join('/'),
			component: lazy(mod),
		}
	})
	.reduce<Record<string, Omit<Route, 'path'>>>((previous, current) => {
		previous[current.path] = {
			meta: current.meta,
			filePath: current.filePath,
			component: current.component,
		}
		return previous
	}, {})

// For use in Solid Router and our prerender script
export const appRoutes = Object.entries(routes).map<RouteDefinition>(
	([path, route]) => ({ path, component: route.component }),
)
