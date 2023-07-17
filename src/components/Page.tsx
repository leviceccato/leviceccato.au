// The purpose of Page is to synchronise route data
// with the head of the document. Additionally it
// serialises this data into the HTML so that the
// postbuild script can handle updating the head.

import { Show, onMount, type ParentComponent, createMemo } from 'solid-js'
import { LayoutDefault } from '#/components/LayoutDefault'
import { type Meta } from '#/data/routes'

export const Page: ParentComponent<
	Meta & {
		headDataAttr?: string
		routeDataId?: string
	}
> = (props) => {
	props.headDataAttr ??= 'route'
	props.routeDataId ??= 'route'
	props.layout ??= 'default'
	props.head ??= []

	const headAll = () => [
		...props.head!,
		['title', {}, props.title],
		['meta', { name: 'description', content: props.description }],
	]

	const headHtml = createMemo(() => {
		return headAll()
			.map(([tag, attrs, content]) => {
				let html = `<${tag} data-${props.headDataAttr}`

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
	})

	onMount(() => {
		// When the layout changes swap all old head elements with new ones
		document
			.querySelectorAll(`[data-${props.headDataAttr}]`)
			.forEach((el) => el.remove())
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
			<Show when={props.layout === 'empty'}>{props.children}</Show>
			<Show when={props.layout === 'default'}>
				<LayoutDefault>{props.children}</LayoutDefault>
			</Show>
		</>
	)
}
