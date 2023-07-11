import { type Component } from 'solid-js'
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
	props.skipLinkId ??= 'header-end'

	return (
		<header
			id={props.id}
			class={css.root}
		>
			<Container>
				<VisuallyHidden isFocusable>
					<a href={`#${props.skipLinkId}`}>Skip to main content</a>
				</VisuallyHidden>
				<Nav
					position="start"
					columns={props.nav}
				/>
			</Container>
			<span id={props.skipLinkId} />
		</header>
	)
}
