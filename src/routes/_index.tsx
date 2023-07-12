import * as t from '#/toolkit'

export const meta = t.meta({
	title: 'Home',
	description: 'asd',
})

export default t.page(() => (
	<>
		<t.H1>
			Levi is a <t.A href="/logos">designer</t.A>—
			<t.A href="/blog">developer</t.A> and <t.A href="/art">illustrator</t.A>.
		</t.H1>
		<t.H2>Test</t.H2>
		<t.P>
			He's currently working with Orygen to improve mental health in young
			people and hacking away at various side projects, most of which are
			viewable on this site. The best way to get in contact with him is by
			sending an email to{' '}
			<t.A href="mailto:mail@levic.com.au">mail@levic.com.au</t.A>.
		</t.P>
	</>
))
