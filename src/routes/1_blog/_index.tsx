import * as t from '#/toolkit'

export const meta = {
	title: 'Blog',
	description: 'Thoughts at the intersection of design and development.',
}

export default t.route(meta, () => (
	<>
		<t.H1>Blog</t.H1>
		<t.P>Thoughts at the intersection of design and development.</t.P>
		<t.Listing />
	</>
))
