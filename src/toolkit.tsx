import { type JSX, Component } from 'solid-js'
import { type Meta } from '#/data/routes'
import { Page } from '#/components/Page'

export { H1 } from '#/components/H1'
export { H2 } from '#/components/H2'
export { H3 } from '#/components/H3'
export { A } from '#/components/A'
export { P } from '#/components/P'
export { Quote } from '#/components/Quote'

export function meta(m: Meta): Meta {
	return m
}

export function page(p: () => JSX.Element): Component {
	return () => <Page>{p()}</Page>
}
