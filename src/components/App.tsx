import * as t from '#/utils/toolkit'
import { Suspense } from 'solid-js'
import { useRoutes } from '@solidjs/router'
import { routes } from '#/utils/routes'
import Header from '#/components/Header'

const nav = [
	[
		{ text: 'Home', url: '/' },
		{ text: 'Blog', url: '/blog' },
	],
	[
		{ text: 'Logos', url: '/logos' },
		{ text: 'Art', url: '/art' },
	],
	[
		{ text: 'Colophon', url: '/colophon' },
		{ text: 'Search', url: '/search' },
	],
]

export default t.component(() => {
	const Routes = useRoutes(routes)

	return (
		<>
			<Header
				id="header"
				endId="header-end"
				nav={nav}
			/>
			{/*
				Suspense is required for prerendering async
				routes to work
			*/}
			<Suspense>
				<Routes />
			</Suspense>
		</>
	)
})
