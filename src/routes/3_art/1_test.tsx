import * as t from '#/toolkit'

export default t.route(
	{
		title: 'Test',
		description: 'asd',
	},
	() => (
		<>
			<t.H1>Test</t.H1>
			<t.P>Test</t.P>
		</>
	),
)
