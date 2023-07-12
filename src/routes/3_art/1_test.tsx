import * as t from '#/toolkit'

export const meta = t.meta({
	title: 'Test',
	description: 'asd',
})

export default t.page(() => (
	<>
		<t.H1>Test</t.H1>
		<t.P>Test</t.P>
	</>
))
