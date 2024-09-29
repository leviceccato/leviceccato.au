import { createSignal, onCleanup, onMount } from 'solid-js'

type Options<TEvent extends Event> = AddEventListenerOptions & {
	eventName: string
	target: () => EventTarget
	listener: (event: TEvent) => void
}

export function createEventListener<TEvent extends Event>(
	options: Options<TEvent>,
): () => void {
	/**
	 * Track if our listener was actually added in case `onCleanup`
	 * runs before `onMount`.
	 */
	const [removeListener, setRemoveListener] = createSignal<() => void>()

	function listener(event: Event): void {
		options.listener(event as TEvent)
	}

	onMount(() => {
		options.target().addEventListener(options.eventName, listener, options)

		setRemoveListener(() => () => {
			options.target().removeEventListener(options.eventName, listener, options)
		})
	})

	onCleanup(() => {
		removeListener()?.()
	})

	return removeListener
}
