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
	const allHeadItems = () => {
		const items = props.head || []

		if (props.title) {
			items.push(['title', {}, props.title])
		}

		if (props.description) {
			items.push([
				'meta',
				{ name: 'description', content: props.description },
			])
		}

		return items
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
		document.head.insertAdjacentHTML('beforeend', allHeadItems())
	})

	return (
		<>
			{/* Serialise data so it can be added to head during prerendering */}
			<script
				type="application/json"
				id="route-data"
				textContent={JSON.stringify({
					head: allHeadItems(),
				})}
			/>
			<main>{props.children}</main>
		</>
	)
} satisfies ParentComponent<Props>)
