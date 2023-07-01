import { type Component } from 'solid-js'
import { Nav, type NavProps } from '#/components/Nav'
import { VisuallyHidden } from '#/components/VisuallyHidden'
import * as css from './Header.css'

export const Header: Component<{
	id: string
	// An destination for the skip link must be specified
	skipLinkUrl: string
	nav: NavProps['columns']
}> = (props) => {
	return (
		<header
			id={props.id}
			class={css.root}
		>
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
		</header>
	)
}
