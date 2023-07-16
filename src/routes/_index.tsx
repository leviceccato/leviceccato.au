import * as t from '#/toolkit'
import image from './image.jpeg?w=100&lossless'

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
		<t.H2>Test</t.H2>
		<t.P>
			He's currently working with Orygen to improve mental health in young
			people and hacking away at various side projects, most of which are
			viewable on this site. The best way to get in contact with him is by
			sending an email to{' '}
			<t.A href="mailto:mail@levic.com.au">mail@levic.com.au</t.A>.
		</t.P>
		<t.Quote>Hello this is quote</t.Quote>
		<t.Ul>
			<t.Uli>Sup 1</t.Uli>
			<t.Uli>Sup 2</t.Uli>
			<t.Uli>Sup 3</t.Uli>
		</t.Ul>
		<t.Ol>
			<t.Oli>Test 1</t.Oli>
			<t.Oli>Test 1</t.Oli>
			<t.Oli>Test 1</t.Oli>
		</t.Ol>
		<t.Figure
			image={image}
			alt="hello"
		/>
	</>
))
