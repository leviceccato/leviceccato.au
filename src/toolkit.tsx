// This file exposes commonly used components and helpers
// for use routes.

import { type JSX, Component } from 'solid-js'
import { type Meta } from '#/data/routes'
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
export { Listing } from '#/components/Listing'
export { Logo } from '#/components/Logo'

export function route(meta: Meta, pageContent: () => JSX.Element): Component {
	return () => <Page {...meta}>{pageContent()}</Page>
}
