import { type ParentComponent } from 'solid-js'
import { Header } from '#/components/Header'
import { Main } from '#/components/Main'
import { Footer } from '#/components/Footer'

export const LayoutDefault: ParentComponent = (props) => {
	return (
		<>
			<Header
				id="header"
				skipLinkUrl="#main"
			/>
			<Main id="main">{props.children}</Main>
			<Footer />
		</>
	)
}
