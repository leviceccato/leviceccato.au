import Clickable from '@/components/clickable'
import { areUrlsSameOrigin } from '@/utils/misc'
import { defaultProps } from '@/utils/solid'
import { type JSX, createMemo } from 'solid-js'
import * as css from './link.css'

export default function Link(_props: {
	to: string
	class?: string
	children?: JSX.Element
}) {
	const props = defaultProps(_props, { class: '' })

	const isExternal = createMemo(() => {
		return areUrlsSameOrigin(
			props.to,
			// biome-ignore lint:
			import.meta.env['VITE_URL'],
		)
	})

	return (
		<Clickable
			as="a"
			class={`${css.root} ${props.class}`}
			attrs={{
				href: props.to,
				target: isExternal() ? '_blank' : undefined,
				rel: isExternal() ? 'noreferrer' : undefined,
			}}
		>
			{/**
			 * Adding a breaking space either side makes it easier to use
			 * this component inside textual layouts as you don't
			 * have to ensure proper formatting to get spaces. This
			 * will not effect elements outside of an inline
			 * context.
			 */}
			&#32;<span class={css.inner}>{props.children}</span>&#32;
		</Clickable>
	)
}
