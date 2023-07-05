import { type Component } from 'solid-js'
import { Nav, type NavProps } from '#/components/Nav'
import { VisuallyHidden } from '#/components/VisuallyHidden'
import { Container } from '#/components/Container'
import * as css from './Header.css'

export const Header: Component<{
	id: string
	// A destination for the skip link must be specified
	skipLinkUrl: string
	nav: NavProps['columns']
	// Manually allow setting underline styles, using ems
	// is too unpredictable at smaller sizes and lower
	// pixel densities.
	underlineThickness: number
	underlineOffset: number
}> = (props) => {
	return (
		<header
			id={props.id}
			class={css.root}
		>
			<Container>
				<VisuallyHidden isFocusable>
					<a
						class="Skip VisuallyHidden focusable"
						href={props.skipLinkUrl}
					>
						Skip to main content
					</a>
				</VisuallyHidden>
				<Nav
					position="start"
					columns={props.nav}
				/>
			</Container>
		</header>
	)
}
