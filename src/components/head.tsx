/**
 * The purpose of this component is to synchronise
 * route data with the head of the document. Additionally
 * it serialises this data into the HTML so that the
 * prerender script can handle updating the head.
 */

import type { Meta } from '@/data/routes'
import { defaultProps } from '@/utils/solid'
import { createMemo, onMount } from 'solid-js'

export default function Head(_props: Meta) {
	const props = defaultProps(_props, { head: [] })

	const headHtml = createMemo(() => {
		const headAll = [
			...props.head,
			['title', {}, props.title],
			['meta', { name: 'description', content: props.description }],
		]

		return headAll
			.map(([tag, attrs, content]) => {
				let html = `<${tag} data-route`

				for (let [name, value] of Object.entries(attrs)) {
					/**
					 * Cast booleans to either non-existing or
					 * empty strings
					 */
					if (value === false) {
						return
					}

					if (value === true) {
						value = ''
					}

					html += ` ${name}='${value}'`
				}

				if (!content) {
					return `${html} />`
				}

				return `${html}>${content}</${tag}>`
			})
			.join('')
	})

	onMount(() => {
		/**
		 * When the layout changes swap all old head elements with new ones
		 */

		for (const headEl of document.querySelectorAll('[data-route]')) {
			headEl.remove()
		}

		document.head.insertAdjacentHTML('beforeend', headHtml())
	})

	/**
	 * Serialise data so it can be added to head during prerendering
	 */
	return (
		<script
			type="application/json"
			id="route"
			textContent={JSON.stringify({
				head: headHtml(),
			})}
		/>
	)
}
