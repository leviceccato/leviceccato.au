// This script will generate index.html files corresponding
// to the routes defined for the app. It must be run with
// vite-node as it utilises it's config and environment.

import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { load } from 'cheerio'
import { renderToStringAsync, generateHydrationScript } from 'solid-js/web'
import indexHtml from './dist/index.html?raw'
import { routes } from '#/routes'
import { createApp } from '#/main'

// See https://www.solidjs.com/docs/latest#hydrationscript
const hydrationScript = generateHydrationScript()
const dist = resolve('./dist')

for (const route of routes) {
    const dom = load(indexHtml)
    // renderToStringAsync must be used to ensure lazy routes
    // are completely loaded
    const appHtml = await renderToStringAsync(createApp(route.path))

    dom('head').append(hydrationScript)
    dom('#root').html(appHtml)

    let routeData: any
    try {
        routeData = JSON.parse(dom('#route-data').text())
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Invalid route data: ${error.message}`)
            process.exit(1)
        }
    }
    dom('head').append(routeData.head)

    const dir = resolve(dist, '.' + route.path)
    mkdirSync(dir, { recursive: true })
    const path = resolve(dir, './index.html')

    const html = dom.root().html()
    if (!html) {
        console.error(`Failed to build index.html file contents for route: '${route.path}'`)
        process.exit(1)
    }

    writeFileSync(path, html)
}

console.log('All routes successfully prerendered.')