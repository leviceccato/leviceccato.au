import { type JSX, Component } from 'solid-js'
import { type RouteProps } from '#/components/Page'
import { Page } from '#/components/Page'

export function route(
	props: RouteProps,
	component: () => JSX.Element,
): Component {
	return () => <Page {...props}>{component()}</Page>
}
