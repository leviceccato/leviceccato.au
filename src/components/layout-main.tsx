import { type ParentComponent, createSignal, onMount } from 'solid-js'

export const LayoutMain: ParentComponent = (props) => {
	const [thing, setThing] = createSignal(0)

	onMount(() => {
		console.log(props)
	})

	return (
		<div>
			<button type="button" onClick={() => setThing(thing() + 1)}>
				{thing()}
			</button>
			{props.children}
		</div>
	)
}
