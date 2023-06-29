// The purpose of Page is to synchronise route data
// with the head of the document. Additionally it
// serialises this data into the HTML so that the
// prerendering script can handle updating the head.

import * as t from '#/utils/toolkit'
import { onMount, type JSX } from 'solid-js'

// Allow head items with no textContent
type HeadItem =
	| [string, Record<string, string | boolean>]
	| [string, Record<string, string | boolean>, string]

// Forwarded to layouts, since Page is designed to
// be renderless.
export type PageProps = {
	children?: JSX.Element
	title: string
	description: string
	head?: HeadItem[]
}

export default t.component<PageProps & {
	headDataAttr: string
	routeDataId: string
}>((props) => {
	const headCustom = () => props.head || []

	const head = () => [
		...headCustom(),
		['title', {}, props.title],
		['meta', { name: 'description', content: props.description }],
	]

	const headHtml = () => {
		return head()
			.map(([tag, attrs, content]) => {
				let html = `<${tag} data-${props.headDataAttr} `

				Object.entries(attrs).forEach(([name, value]) => {
					// Cast booleans to either non-existing or
					// empty strings
					if (value === false) {
						return
					}

					if (value === true) {
						value = ''
					}

					html += `${name}="${value}" `
				})

				if (!content) {
					return `${html}/>`
				}

				return `${html}>${content}</${tag}>`
			})
			.join('')
	}

	onMount(() => {
		// When the layout changes swap all old head elements with new ones
		document.querySelectorAll(`[data-${props.headDataAttr}]`).forEach((el) => el.remove())
		document.head.insertAdjacentHTML('beforeend', headHtml())
	})

	return (
		<>
			{/* Serialise data so it can be added to head during prerendering */}
			<script
				type="application/json"
				id={props.routeDataId}
				textContent={JSON.stringify({
					head: headHtml(),
				})}
			/>
			{props.children}
		</>
	)
})
