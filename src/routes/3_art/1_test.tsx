import * as t from '#/toolkit'

export const meta = t.meta({})

export default t.route(
	{
		title: 'Test',
		description: 'asd',
	},
	() => (
		<>
			<div>Test</div>
		</>
	),
)
