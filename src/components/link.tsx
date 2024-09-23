import Clickable from '@/components/clickable'
import { areUrlsSameOrigin } from '@/utils/misc'
import { defaultProps } from '@/utils/solid'
import { type JSX, createMemo } from 'solid-js'

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
			attrs={{
				href: props.to,
				target: isExternal() ? '_blank' : undefined,
				rel: isExternal() ? 'noreferrer' : undefined,
			}}
		>
			{props.children}
		</Clickable>
	)
}
