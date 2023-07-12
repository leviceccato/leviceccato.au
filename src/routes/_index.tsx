import * as t from '#/toolkit'

export default t.route(
	{
		title: 'Home',
		description: 'asd',
	},
	() => (
		<>
			<t.H1>
				Levi is a <t.A href="/logos">designer</t.A>—
				<t.A href="/blog">developer</t.A> and <t.A href="/art">illustrator</t.A>
				.
			</t.H1>
			<t.P>
				He's currently working with Orygen to improve mental health in young
				people and hacking away at various side projects, most of which are
				viewable on this site. The best way to get in contact with him is by
				sending an email to{' '}
				<t.A href="mailto:mail@levic.com.au">mail@levic.com.au</t.A>.
			</t.P>
		</>
	),
)
