/**
 * This script will generate index.html files corresponding
 * to the routes defined for the app. It must be run with
 * vite-node as it utilises it's config and environment.
 * It will also fix asset URLs and optimise them.
 */

import { mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { routes } from '@/data/routes'
import { createApp } from '@/main'
import { load } from 'cheerio'
import { generateHydrationScript, renderToStringAsync } from 'solid-js/web'

const dist = resolve('./dist')
const indexHtml = await Bun.file(resolve(dist, './index.html')).text()
const templateDom = load(indexHtml)

/**
 * See https://www.solidjs.com/docs/latest#hydrationscript
 */
templateDom('head').append(generateHydrationScript())

let routeCount = 0

const resolvedRoutes = await Promise.all(
	routes.map(async (route) => {
		return {
			...route,
			page: await route.page(),
		}
	}),
)

for (const route of routes) {
	const dom = load(templateDom.html())

	/**
	 * renderToStringAsync must be used to ensure lazy routes
	 * are completely loaded
	 */
	const appHtml = await renderToStringAsync(
		createApp(route.path, resolvedRoutes),
	)
	dom('body').html(appHtml)

	console.log('DOM', dom.html())
	console.log('DOM', appHtml)

	/**
	 * Update head with route tags provided by rendered app
	 */
	const routeData = JSON.parse(dom('#route').text())
	dom('head').append(routeData.head)

	const dir = resolve(dist, `.${route.path}`)
	mkdirSync(dir, { recursive: true })
	const path = resolve(dir, './index.html')

	const html = dom.root().html()

	if (html) {
		await Bun.write(path, html)
		routeCount++
	}
}

console.log(`${routeCount} routes prerendered.`)
