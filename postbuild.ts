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

	// Fix static asset URL references, add corresponding source elements
	// then optimise images
	dom('picture').each((_, picture) => {
		const pictureDom = dom(picture)
		const image = pictureDom.find('img')
		const imageDom = dom(image)
		const imageSrc = imageDom.attr('src')
		if (!imageSrc) {
			return
		}

		// Construct paths
		const manifestKey = imageSrc.slice(1)
		const assetPath = '/' + manifest[manifestKey].file
		const parsedAssetPath = parseImagePath(assetPath)
		const assetPath1 = `${parsedAssetPath.path}_o.${parsedAssetPath.format}`
		const assetPath2 = `${parsedAssetPath.path}_o.avif`
		const filePath = resolve(dist, '.' + assetPath)

		// Update DOM
		imageDom.attr('src', assetPath1)
		imageDom.attr('width', String(parsedAssetPath.width))
		pictureDom.prepend(`<source srcset="${assetPath2}" type="image/avif" />`)

		// Optimise images
		;[assetPath1, assetPath2].forEach((path) => {
			assetCount++

			sharp(filePath)
				.resize({ width: parsedAssetPath.width })
				.toFile(resolve(dist, '.' + path))
				.catch((error) => {
					console.error(`Failed to process image '${path}': ${error}`)
					process.exit(1)
				})
		})
	})

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

console.log(`${routes.length} routes prerendered.
${assetCount} assets optimised.`)
