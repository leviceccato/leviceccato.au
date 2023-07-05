import { type Component, mergeProps } from 'solid-js'
import { Nav, type NavProps } from '#/components/Nav'
import { VisuallyHidden } from '#/components/VisuallyHidden'
import { Container } from '#/components/Container'
import * as css from './Header.css'

export const Header: Component<{
	id: string
	// Set a name for the skip link target
	skipLinkId: string
	nav: NavProps['columns']
}> = (props) => {
	const _props = mergeProps({ skipLinkId: 'header-end' }, props)

	return (
		<header
			id={_props.id}
			class={css.root}
		>
			<Container>
				<VisuallyHidden isFocusable>
					<a href={`#${_props.skipLinkId}`}>Skip to main content</a>
				</VisuallyHidden>
				<Nav
					position="start"
					columns={_props.nav}
				/>
			</Container>
			<span id={_props.skipLinkId} />
		</header>
	)
}
