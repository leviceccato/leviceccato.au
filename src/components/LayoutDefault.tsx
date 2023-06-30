import { type ParentComponent } from 'solid-js'
import { chunk } from '#/utils/misc'
import { Header } from '#/components/Header'
import { Main } from '#/components/Main'
import { Footer } from '#/components/Footer'

const headerNav = [
	{ text: 'Home', url: '/' },
	{ text: 'Blog', url: '/blog' },
	{ text: 'Logos', url: '/logos' },
	{ text: 'Art', url: '/art' },
	{ text: 'Colophon', url: '/colophon' },
	{ text: 'Links', url: '/links' },
]

const groupedHeaderNav = chunk(headerNav, 2)

export const LayoutDefault: ParentComponent = (props) => {
	return (
		<>
			<Header
				id="header"
				skipLinkUrl="#main"
				nav={groupedHeaderNav}
			/>
			<Main id="main">{props.children}</Main>
			<Footer />
		</>
	)
}
