import * as t from '#/toolkit'

export const meta = t.meta({
	title: 'Colophon',
	description: 'asd',
})

export default t.page(() => (
	<>
		<t.H1>Colophon</t.H1>
		<t.P>
			Created in July 2023 by Levi Ceccato and continually updated. All content
			is subject to copyright.
		</t.P>
		<t.H2>Technical</t.H2>
		<t.P>
			This site is built as a SolidJS SPA with prerendering and is hosted on
			Netlify. The project is open source and on GitHub.
		</t.P>
		<t.H2>Typography</t.H2>
		<t.P>Typeset in Manrope by Mikhail Sharanda.</t.P>
	</>
))
