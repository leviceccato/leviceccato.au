import * as t from '#/toolkit'

export const meta = {
	title: 'Art',
	description: 'asd',
}

export default t.route(meta, () => (
	<>
		<t.H1>Art</t.H1>
		<t.P>Art</t.P>
		<t.Listing />
	</>
))
