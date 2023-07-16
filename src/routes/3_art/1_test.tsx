import * as t from '#/toolkit'

export const meta = {
	title: 'Test',
	description: 'asd',
}

export default t.route(meta, () => (
	<>
		<t.H1>Test</t.H1>
		<t.P>Test</t.P>
	</>
))
