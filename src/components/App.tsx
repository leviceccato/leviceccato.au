import { type Component, Suspense } from 'solid-js'
import { useRoutes, A } from '@solidjs/router'
import { routes } from '#/routes'

export default (function () {
	const Routes = useRoutes(routes)

	return (
		<div>
			<header>
				<A href="/">home</A>
				<A href="/test">test</A>
				<A href="/test/another">test/another</A>
			</header>
			<Suspense>
				<Routes />
			</Suspense>
		</div>
	)
} satisfies Component)
