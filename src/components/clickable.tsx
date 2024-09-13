import Text from '@/components/text'
import { createDefaultProps } from '@/primitives/default-props'
import { type JSX, Show, createMemo } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import * as css from './clickable.css'

type Tag = 'a' | 'button' | 'input'

export default function Clickable(_props: {
	class?: string
	tag?: Tag
	text?: string
	type?: string
	href?: string
	onClick?: JSX.HTMLAttributes<HTMLElement>['onClick']
	children?: JSX.Element
}) {
	const props = createDefaultProps(_props, { class: '' })

	const tag = createMemo<Tag>(() => {
		if (props.tag) {
			return props.tag
		}

		if (props.href) {
			return 'a'
		}

		return 'button'
	})

	const type = createMemo(() => {
		if (props.type) {
			return props.type
		}

		if (tag() === 'button') {
			return 'button'
		}

		return undefined
	})

	return (
		<Dynamic
			class={`${props.class} ${css.root}`}
			href={props.href}
			type={type()}
			component={tag()}
		>
			<Show when={props.text} fallback={props.children}>
				<Text is="body-xs">{props.text}</Text>
			</Show>
		</Dynamic>
	)
}
