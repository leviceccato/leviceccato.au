import * as t from '#/toolkit'
import { createSignal } from 'solid-js'

export default t.route(
	{
		title: 'Home',
		description: 'asd',
	},
	() => {
		const [count, setCount] = createSignal(0)

		return (
			<>
				<div>Home</div>

				<p>Count: {count()}</p>
				<button onClick={() => setCount(v => v + 1)}>Increment count</button>
			</>
		)
	},
)
