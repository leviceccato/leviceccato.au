// This script will generate index.html files corresponding
// to the routes defined for the app. It must be run with
// vite-node as it utilises it's config and environment.

import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { load } from 'cheerio'
import { type Manifest } from 'vite'
import { renderToStringAsync, generateHydrationScript } from 'solid-js/web'
import indexHtml from './dist/index.html?raw'
import manifestJson from './dist/manifest.json'
import { routes } from '#/data/routes'
import { createApp } from '#/main'

const dist = resolve('./dist')
const manifest = manifestJson as Manifest
const templateDom = load(indexHtml)

// See https://www.solidjs.com/docs/latest#hydrationscript
templateDom('head').append(generateHydrationScript())

const renderPromises = routes.map(
	(route) =>
		new Promise<void>(async (res, rej) => {
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
				return rej(
					new Error(`Invalid data for route '${route.path}': ${error}`),
				)
			}
			dom('head').append(routeData.head)

			// Fix static asset URL references
			dom('[data-image]').each((_, image) => {
				// Remove preceding '/'
				const manifestKey = image.attribs['src'].slice(1)
				const assetUrl = '/' + manifest[manifestKey].file
				dom(image).attr('src', assetUrl)
			})

			const dir = resolve(dist, '.' + route.path)
			mkdirSync(dir, { recursive: true })
			const path = resolve(dir, './index.html')

			const html = dom.root().html()
			if (!html) {
				return rej(
					new Error(
						`Failed to build index.html file contents for route '${route.path}'`,
					),
				)
			}

			writeFileSync(path, html)
			res()
		}),
)

try {
	Promise.all(renderPromises)
} catch (error) {
	console.error(`Failed to render routes: ${error}`)
}
console.log('All routes successfully prerendered.')
