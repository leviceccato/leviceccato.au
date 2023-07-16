// This file is responsible for transforming the files in 'routes' to an array
// of routes that can be utilised by Solid's client and for prerendering

import { type Component } from 'solid-js'

// Allow head items with no textContent
type HeadItem =
	| [string, Record<string, string | boolean>]
	| [string, Record<string, string | boolean>, string]

export type Meta = {
	title: string
	description: string
	thumbnail?: string
	head?: HeadItem[]
	layout?: 'default' | 'empty'
}

type Page = { default: Component<any> }

// Route meta and page are imported separately so they can be
// tree-shaken separately.

const metas = import.meta.glob<Meta>('../routes/**/*_*.tsx', {
	import: 'meta',
})

const pages = import.meta.glob<Page>('../routes/**/*_*.tsx')

type Route = {
	meta: () => Promise<Meta>
	filePath: string
	path: string
	isHidden: boolean
	page: () => Promise<Page>
}

export const routes = Object
	// We can iterate over routeMetas or routePages here
	.entries(metas)
	.sort(([a], [b]) => a.localeCompare(b, 'en-AU', { numeric: true }))
	.map<Route>(([path, meta]) => {
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
			meta,
			filePath: path,
			path: '/' + segments.join('/'),
			isHidden,
			page: pages[path],
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
