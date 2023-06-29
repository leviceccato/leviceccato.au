import { type ParentComponent } from 'solid-js'
import { onMount } from 'solid-js'

type HeadItem =
	| [string, Record<string, string | boolean>]
	| [string, Record<string, string | boolean>, string]

type Props = {
	title: string
	description: string
	head?: HeadItem[]
}

export default (function (props) {
	const headCustom = () => props.head || []

	const head = () => [
		...headCustom(),
		['title', {}, props.title],
		['meta', { name: 'description', content: props.description }],
	]

	const headHtml = () => {
		return head()
			.map(([tag, attrs, content]) => {
				let html = `<${tag} data-route-head `

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
		document.querySelectorAll('[data-route-head]').forEach((el) => el.remove())
		document.head.insertAdjacentHTML('beforeend', headHtml())
	})

	return (
		<>
			{/* Serialise data so it can be added to head during prerendering */}
			<script
				type="application/json"
				id="route-data"
				textContent={JSON.stringify({
					head: headHtml(),
				})}
			/>
			<main>{props.children}</main>
		</>
	)
} satisfies ParentComponent<Props>)
