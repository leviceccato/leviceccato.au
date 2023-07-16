import * as t from '#/toolkit'

export const meta = {
	title: 'Colophon',
	description: 'asd',
}

export default t.route(meta, () => (
	<>
		<t.H1>Colophon</t.H1>
		<t.P>
			Created in July 2023 by Levi Ceccato and continually updated. All content
			is subject to copyright.
		</t.P>
		<t.H2>Technical</t.H2>
		<t.P>
			This site is built as a SolidJS SPA with full prerendering, essentially
			making it a static site generator. As a result, it works without
			JavaScript, but dynamic functionality is provided once hydrated. It's
			hosted on Netlify and the source is available on GitHub.
		</t.P>
		<t.H2>Typography</t.H2>
		<t.P>Typeset in Manrope by Mikhail Sharanda.</t.P>
	</>
))
