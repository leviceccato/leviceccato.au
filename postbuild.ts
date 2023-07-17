// This script will generate index.html files corresponding
// to the routes defined for the app. Additionally it will
// correct image imports while optimising them. It must be
// run with vite-node.

import { promises as fs } from 'node:fs'
import { resolve } from 'node:path'
import { load, type CheerioAPI } from 'cheerio'
import { type Manifest } from 'vite'
import { renderToStringAsync, generateHydrationScript } from 'solid-js/web'
import { routes, type Route } from '#/data/routes'
import { createApp } from '#/main'
import indexHtml from './dist/index.html?raw'
import manifestJson from './dist/manifest.json'

const dist = resolve('./dist')
const manifest = manifestJson as Manifest
const templateDom = load(indexHtml)

// See https://www.solidjs.com/docs/latest#hydrationscript
templateDom('head').append(generateHydrationScript())

try {
	const doms = await Promise.all(routes.map((route) => routeToDom(route)))
	await Promise.all(doms.map((dom) => optimiseImages(dom)))
	await Promise.all(doms.map((dom, i) => domToFile(dom, routes[i])))
} catch (error) {
	console.error(`Failed to write files: ${error}`)
	process.exit(1)
}

console.log(`Postbuild successful:
- ${routes.length} routes prerendered
- x images optimised`)

async function routeToDom(route: Route): Promise<CheerioAPI> {
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
		throw new Error(`Invalid data for route '${route.path}': ${error}`)
	}
	dom('head').append(routeData.head)

	return dom
}

async function optimiseImages(dom: CheerioAPI): Promise<void> {
	// Fix asset URL references, optimise images
	// and update references in HTML.
	dom('[data-image]').each((_, element) => {
		// Remove preceding '/'
		const manifestKey = element.attribs['src'].slice(1)

		// Construct actual asset URL
		let assetUrl = '/' + manifest[manifestKey].file

		const type = element.attribs['type']
		if (type) {
		}

		dom(element).attr('src', assetUrl)
	})
}

async function domToFile(dom: CheerioAPI, route: Route): Promise<void> {
	const dir = resolve(dist, '.' + route.path)
	await fs.mkdir(dir, { recursive: true })
	const path = resolve(dir, './index.html')

	const html = dom.root().html()
	if (!html) {
		throw new Error(
			`Failed to build index.html file contents for route '${route.path}'`,
		)
	}

	fs.writeFile(path, html)
}
