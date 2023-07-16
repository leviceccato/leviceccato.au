import { type JSX, Component } from 'solid-js'
import { Page } from '#/components/Page'

export { H1 } from '#/components/H1'
export { H2 } from '#/components/H2'
export { H3 } from '#/components/H3'
export { A } from '#/components/A'
export { P } from '#/components/P'
export { Quote } from '#/components/Quote'
export { Ul } from '#/components/Ul'
export { Uli } from '#/components/Uli'
export { Ol } from '#/components/Ol'
export { Oli } from '#/components/Oli'
export { Figure } from '#/components/Figure'

// Allow head items with no textContent
type HeadItem =
	| [string, Record<string, string | boolean>]
	| [string, Record<string, string | boolean>, string]

export type Meta = {
	title: string
	description: string
	thumbnail?: string
	head?: HeadItem[]
	layout?: 'default' | 'empty'
}

export function route(meta: Meta, page: () => JSX.Element): Component {
	return () => <Page {...meta}>{page()}</Page>
}
