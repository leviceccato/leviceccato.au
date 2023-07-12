import {
	type ParentComponent,
	type JSX,
	children,
	createEffect,
	createSignal,
	Show,
} from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { Container } from '#/components/Container'
import { Text } from '#/components/Text'
import { A } from '#/components/A'
import { slugify } from '#/utils/misc'
import * as css from './Heading.css'

export const Heading: ParentComponent<{
	level: '1' | '2' | '3' | '4' | '5' | '6'
	class?: string
	style?: JSX.CSSProperties
	link?: boolean | string
}> = (props) => {
	props.class ??= ''
	props.link ??= false

	const resolvedChildren = children(() => props.children)

	const [childrenText, setChildenText] = createSignal('')

	const enableLink = () => Boolean(props.link)

	const linkText = () =>
		typeof props.link === 'string' ? props.link : childrenText()

	const linkId = () => slugify(linkText())

	const linkUrl = () => `#${linkId()}`

	createEffect(() => {
		resolvedChildren.toArray().forEach((child) => {
			if (child instanceof Node) {
				setChildenText((t) => t + child.textContent)
			} else if (typeof child === 'string') {
				setChildenText((t) => t + child)
			}
		})
	})

	return (
		<Container class={props.class}>
			<Dynamic
				component={`h${props.level}`}
				class={css.heading}
				style={props.style}
				id={linkId()}
			>
				<Text variant="block">
					<Show
						when={enableLink()}
						fallback={resolvedChildren()}
					>
						<A href={linkUrl()}>{resolvedChildren()}</A>
					</Show>
				</Text>
			</Dynamic>
		</Container>
	)
}
