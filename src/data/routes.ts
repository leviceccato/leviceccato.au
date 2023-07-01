// This file is responsible for transforming the files in 'routes' to an array
// of routes that can be utilised by Solid's client and for prerendering

import { lazy, type Component } from 'solid-js'
import { type RouteDefinition } from '@solidjs/router'

// Route modules are imported lazily
const routeModules = import.meta.glob<{ default: Component<any> }>(
	'../routes/**/*_*.tsx',
)

export type Route = Pick<RouteDefinition, 'component' | 'path'> & {
	filePath: string
	isHidden: boolean
}

// First transform into object so that metas can be accessed from a
// provided route path
export const routeMap = Object.entries(routeModules)
	.sort(([a], [b]) => a.localeCompare(b, 'en-AU', { numeric: true }))
	.map<Route>(([path, mod]) => {
		let segments = path.split('/')

		// Get segments relative to 'routes', e.g; ['about', '_index.tsx']
		segments = segments.slice(
			segments.indexOf('routes') + 1,
			segments.length + 1,
		)

		let isHidden = false

		segments = segments.flatMap((segment, segmentIndex) => {
			let [number, segmentName] = segment.split('_')

			// Remove file extension
			if (segmentIndex === segments.length - 1) {
				segmentName = segmentName.split('.')[0]
			}

			// Ignore indexes
			if (segmentName === 'index') {
				return []
			}

			// If not an index and with a number, then treat
			// as a hidden page, which means that it is removed
			// from navigation order
			if (!number) {
				isHidden = true
			}

			return [segmentName]
		})

		return {
			filePath: path,
			isHidden,
			path: '/' + segments.join('/'),
			component: lazy(mod),
		}
	})
	.reduce<Record<string, Route>>((previous, current) => {
		previous[current.path] = {
			path: current.path,
			isHidden: current.isHidden,
			filePath: current.filePath,
			component: current.component,
		}
		return previous
	}, {})

export const routes = Object.entries(routeMap)

export function getNextRoute(
	path: string,
	direction: number,
): Route | undefined {
	const routeIndex = routes.findIndex(([p]) => p === path)
	if (routeIndex === -1) {
		return undefined
	}

	let route = routes[routeIndex + direction]
	while (route && route[1].isHidden) {
		direction += direction
		route = routes[routeIndex + direction]
	}

	if (!route) {
		return undefined
	}

	return route[1]
}

// For use in Solid Router and our prerender script
export const appRoutes = routes.map<RouteDefinition>(([path, route]) => ({
	path,
	component: route.component,
}))
