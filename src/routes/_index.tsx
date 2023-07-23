import * as t from '#/toolkit'

export const meta = {
	title: 'Home',
	description: 'asd',
}

export default t.route(meta, () => (
	<>
		<t.H1>
			Levi is a <t.A href="/logos">designer</t.A>—
			<t.A href="/blog">developer</t.A> and <t.A href="/art">illustrator</t.A>.
		</t.H1>
		<t.P>
			He's currently working at{' '}
			<t.A href="https://www.orygen.org.au">Orygen</t.A> to improve mental
			health in young people with the <t.A href="https://most.org.au">MOST</t.A>{' '}
			platform. In his free time he likes to hack away at various side projects
			and artistic endevours. Send him an email{' '}
			<t.A href="mailto:mail@levic.com.au">hi@leviceccato.au</t.A>.
		</t.P>
	</>
))
