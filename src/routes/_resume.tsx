import * as t from '#/toolkit'

export const meta = t.meta({
	isHidden: true,
})

export default t.route(
	{
		title: 'Resume',
		description: 'asd',
	},
	() => (
		<>
			<div>Resume</div>
		</>
	),
)
