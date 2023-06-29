// This file is responsible for transforming the files in 'routes' to an array
// of routes that can be utilised by Solid's client and for prerendering

import { lazy, type Component } from 'solid-js'
import { type RouteDefinition } from '@solidjs/router'

const routeModules = import.meta.glob('./routes/**/*.route.tsx')

export const routes = Object.entries(routeModules).map<RouteDefinition>(
	([path, mod]) => {
		let segments = path.split('/')

		// Get segments relative to 'routes', e.g; ['about', 'index.route.tsx']
		segments = segments.slice(
			segments.indexOf('routes') + 1,
			segments.length + 1,
		)

		// Remove '.route.tsx'
		const fileIndex = segments.length - 1
		segments[fileIndex] = segments[fileIndex].split('.')[0]

		// Remove implied indexes
		if (segments[fileIndex] === 'index') {
			segments.pop()
		}

		return {
			path: '/' + segments.join('/'),
			component: lazy(mod as () => Promise<{ default: Component<any> }>),
		}
	},
)