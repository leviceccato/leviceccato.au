import { createSignal, onCleanup, onMount } from 'solid-js'

type Options<TEvent extends Event> = AddEventListenerOptions & {
	eventName: string
	target: () => EventTarget
	listener: (event: TEvent) => void
}

export function createEventListener<TEvent extends Event>(
	options: Options<TEvent>,
): () => void {
	const [hasListener, setHasListener] = createSignal(false)

	function listener(event: Event): void {
		options.listener(event as TEvent)
	}

	function removeListener(): void {
		if (!hasListener()) {
			return
		}

		options.target().removeEventListener(options.eventName, listener, options)
		setHasListener(false)
	}

	onMount(() => {
		options.target().addEventListener(options.eventName, listener, options)
		setHasListener(true)
	})

	onCleanup(() => {
		removeListener()
	})

	return removeListener
}
