import { createRoot, onCleanup } from 'solid-js'

export function createEventListener<TEvent extends Event>(
	options: {
		eventName: string
		target: EventTarget
		listener: (event: TEvent) => void
	} & AddEventListenerOptions,
): () => void {
	const listener: EventListener = (event: Event) => {
		options.listener(event as TEvent)
	}

	const removeListener = () => {
		options.target.removeEventListener(options.eventName, listener, options)
	}

	createRoot(() => {
		options.target.addEventListener(options.eventName, listener, options)
		onCleanup(removeListener)
	})

	return removeListener
}
