// This script will generate index.html files corresponding
// to the routes defined for the app. It must be run with
// vite-node as it utilises it's config and environment.

import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { load } from 'cheerio'
import { type Manifest } from 'vite'
import sharp from 'sharp'
import { renderToStringAsync, generateHydrationScript } from 'solid-js/web'
import { parseImagePath } from '#/utils/misc'
import { routes } from '#/data/routes'
import { createApp } from '#/main'

const dist = resolve('./dist')
const indexHtml = readFileSync(resolve(dist, './index.html'), 'utf-8')
const manifestJson = readFileSync(resolve(dist, './manifest.json'), 'utf-8')
const manifest = JSON.parse(manifestJson) as Manifest
const templateDom = load(indexHtml)

// See https://www.solidjs.com/docs/latest#hydrationscript
templateDom('head').append(generateHydrationScript())

let assetCount = 0

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

	let imageOperations: Promise<void>[] = []

	// Fix static asset URL references, add corresponding source elements
	// then optimise images
	dom('picture').each((_, picture) => {
		const pictureDom = dom(picture)
		const sources = pictureDom.find('img, source')
		const image = sources[sources.length - 1]
		const imageSrc = image.attribs['src']

		// Construct paths
		const manifestKey = imageSrc.slice(1)
		const assetPath = '/' + manifest[manifestKey].file
		const parsedAssetPath = parseImagePath(assetPath)
		const filePath = resolve(dist, '.' + assetPath)

		// Optimize images and update dom
		sources.each((_, source) => {
			assetCount++

			const sourceDom = dom(source)
			const type = sourceDom.attr('type')
			// In the case of source, get format from the type attribute
			// otherwise use unoptimised image format
			const format = type ? type.split('/')[1] : parsedAssetPath.format
			// The output path must be different for sharp
			const outputPath = `${parsedAssetPath.path}_o.${format}`

			imageOperations.push(
				sharp(filePath)
					.resize({ width: parsedAssetPath.width })
					.toFile(resolve(dist, '.' + outputPath))
					.then((data) => {
						if (sourceDom.is('img')) {
							sourceDom.attr('height', String(data.height))
							sourceDom.attr('src', outputPath)
						} else {
							sourceDom.attr('srcset', outputPath)
						}
					})
					.catch((error) => {
						console.error(`Failed to process image '${outputPath}': ${error}`)
						process.exit(1)
					}),
			)
		})
	})

	Promise.all(imageOperations).then(() => {
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
	})
}

console.log(`${routes.length} routes prerendered.
${assetCount} assets optimised.`)
