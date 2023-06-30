// This file is responsible for transforming the files in 'routes' to an array
// of routes that can be utilised by Solid's client and for prerendering

import { lazy, type Component } from 'solid-js'
import { type RouteDefinition } from '@solidjs/router'

const routeModules = import.meta.glob<{ default: Component<any> }>(
	'../routes/**/*_*.tsx',
)
const routeMetas = import.meta.glob<RouteMeta | undefined>(
	'../routes/**/*_*.tsx',
	{
		import: 'meta',
		eager: true,
	},
)

export type RouteMeta = {
	isHidden?: boolean
}

const normalisedRouteModules = normaliseRoutePaths(routeModules)
export const normalisedRouteMetas = normaliseRoutePaths(routeMetas)
export const normalisedRoutes = Object.keys(normalisedRouteModules)

export const routes = Object.entries(
	normalisedRouteModules,
).map<RouteDefinition>(([path, mod]) => ({ path, component: lazy(mod) }))

function normaliseRoutePaths<TValue>(modules: Record<string, TValue>) {
	return Object.fromEntries(
		Object.entries(modules)
			.sort(([a], [b]) => a.localeCompare(b, 'en-AU', { numeric: true }))
			.map<[string, TValue]>(([path, mod]) => {
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

				return ['/' + segments.join('/'), mod]
			}),
	) as Record<string, TValue>
}
