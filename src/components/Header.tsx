import { type Component } from 'solid-js'
import { Nav } from '#/components/Nav'
import * as css from './Header.css'

export const Header: Component<{
	id: string
	// An destination for the skip link must be specified
	skipLinkUrl: string
}> = (props) => {
	return (
		<header
			id={props.id}
			class={css.root}
		>
			<a
				class="Skip VisuallyHidden focusable"
				href={props.skipLinkUrl}
			>
				Skip to main content
			</a>
			<Nav
				position="start"
				columns={[
					[
						{ text: 'Home', url: '/' },
						{ text: 'Blog', url: '/blog' },
					],
					[
						{ text: 'Logos', url: '/logos' },
						{ text: 'Art', url: '/art' },
					],
					[
						{ text: 'Colophon', url: '/colophon' },
						{ text: 'Search', url: '/search' },
					],
				]}
			/>
		</header>
	)
}
