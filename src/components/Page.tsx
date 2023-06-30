// The purpose of Page is to synchronise route data
// with the head of the document. Additionally it
// serialises this data into the HTML so that the
// prerendering script can handle updating the head.

import { Show, onMount, mergeProps, type JSX, type Component } from 'solid-js'
import { LayoutDefault } from '#/components/LayoutDefault'

// Allow head items with no textContent
type HeadItem =
	| [string, Record<string, string | boolean>]
	| [string, Record<string, string | boolean>, string]

export type RouteProps = {
	title: string
	description: string
	head?: HeadItem[]
	layout?: 'default' | 'empty'
}

type Props = RouteProps & {
	children?: JSX.Element
	headDataAttr?: string
	routeDataId?: string
}

export const Page: Component<Props> = (props) => {
	const _props = mergeProps(
		{
			layout: 'default',
			headDataAttr: 'route',
			routeDataId: 'route',
			head: [],
		},
		props,
	)

	const head = () => [
		..._props.head,
		['title', {}, _props.title],
		['meta', { name: 'description', content: _props.description }],
	]

	const headHtml = () => {
		return head()
			.map(([tag, attrs, content]) => {
				let html = `<${tag} data-${_props.headDataAttr}`

				Object.entries(attrs).forEach(([name, value]) => {
					// Cast booleans to either non-existing or
					// empty strings
					if (value === false) {
						return
					}

					if (value === true) {
						value = ''
					}

					html += ` ${name}='${value}'`
				})

				if (!content) {
					return `${html} />`
				}

				return `${html}>${content}</${tag}>`
			})
			.join('')
	}

	onMount(() => {
		// When the layout changes swap all old head elements with new ones
		document
			.querySelectorAll(`[data-${_props.headDataAttr}]`)
			.forEach((el) => el.remove())
		document.head.insertAdjacentHTML('beforeend', headHtml())
	})

	return (
		<>
			{/* Serialise data so it can be added to head during prerendering */}
			<script
				type="application/json"
				id={_props.routeDataId}
				textContent={JSON.stringify({
					head: headHtml(),
				})}
			/>
			<Show when={_props.layout === 'empty'}>{_props.children}</Show>
			<Show when={_props.layout === 'default'}>
				<LayoutDefault>{_props.children}</LayoutDefault>
			</Show>
		</>
	)
}
