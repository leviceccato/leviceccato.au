import { type JSX, Component } from 'solid-js'
import { type RouteProps } from '#/components/Page'
import { Page } from '#/components/Page'

export { H1 } from '#/components/H1'
export { A } from '#/components/A'
export { P } from '#/components/P'

export function route(
	props: RouteProps,
	component: () => JSX.Element,
): Component {
	return () => <Page {...props}>{component()}</Page>
}
