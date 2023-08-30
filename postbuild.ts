// This script will generate index.html files corresponding
// to the routes defined for the app. It must be run with
// vite-node as it utilises it's config and environment.
// It will also fix asset URLs and optimise them.

import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { load } from 'cheerio'
import { renderToStringAsync, generateHydrationScript } from 'solid-js/web'
import { routes } from '#/data/routes'
import { createApp } from '#/main'

const dist = resolve('./dist')
const indexHtml = readFileSync(resolve(dist, './index.html'), 'utf-8')
const templateDom = load(indexHtml)

// See https://www.solidjs.com/docs/latest#hydrationscript
templateDom('head').append(generateHydrationScript())

for (const route of routes) {
	const dom = load(templateDom.html())

	// renderToStringAsync must be used to ensure lazy routes
	// are completely loaded
	const appHtml = await renderToStringAsync(createApp(route.path))
	dom('body').html(appHtml)

	// Update head with route tags provided by rendered app
	let routeData: any
	try {
		routeData = JSON.parse(dom('#route').text())
	} catch (error) {
		console.error(`Invalid data for route '${route.path}': ${error}`)
		process.exit(1)
	}
	dom('head').append(routeData.head)

	const dir = resolve(dist, '.' + route.path)
	mkdirSync(dir, { recursive: true })
	const path = resolve(dir, './index.html')

	const html = dom.root().html()
	if (!html) {
		console.error(
			`Failed to build index.html file contents for route '${route.path}'`,
		)
		process.exit(1)
	}

	writeFileSync(path, html)
}

console.log(`${routes.length} routes prerendered.`)
