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
			This site is built as a <t.A href="https://www.solidjs.com">SolidJS</t.A>{' '}
			SPA with full prerendering, essentially making it a static site generator.
			As a result, it works without JavaScript, but once hydrated, dynamic
			functionality becomes available. It's hosted on{' '}
			<t.A href="https://www.netlify.com">Netlify</t.A> and the source is
			available on{' '}
			<t.A href="https://github.com/leviceccato/leviceccato.au">GitHub</t.A>.
		</t.P>
		<t.H2>Typography</t.H2>
		<t.P>
			Typeset in <t.A href="https://www.gent.media/manrope">Manrope</t.A> by{' '}
			<t.A href="https://www.gent.media">Mikhail Sharanda</t.A>.
		</t.P>
	</>
))
