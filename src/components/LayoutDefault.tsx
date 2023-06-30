import { type ParentComponent } from 'solid-js'
import { Header } from '#/components/Header'

const nav = [
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
]

export const LayoutDefault: ParentComponent = (props) => {
	return (
		<>
			<Header
				id="header"
				endId="header-end"
				nav={nav}
			/>
			<main>{props.children}</main>
		</>
	)
}