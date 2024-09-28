import Lenis, { type LenisOptions } from 'lenis'
import { createSignal, onCleanup, onMount } from 'solid-js'
import { createEventListener } from './event-listener'

/**
 * A reactive wrapper around Lenis, a modern smooth scrolling library
 */
export function createSmoothScroll(options?: LenisOptions) {
	let lenis: Lenis | undefined
	const [activeSectionId, _setActiveSectionId] = createSignal<string>()

	function handlePopstate(): void {
		if (!window.location.hash) {
			return
		}

		const section = lenis?.rootElement.querySelector(window.location.hash)
		if (!(section instanceof HTMLElement)) {
			return
		}

		lenis?.scrollTo(section)
	}

	function setActiveSectionId(id: string): void {
		_setActiveSectionId(id)

		window.history.pushState(undefined, '', `#${id}`)
	}

	function onScroll(callback: (instance: Lenis) => void): void {
		lenis?.on('scroll', callback)
	}

	function handleFrame(time: DOMHighResTimeStamp) {
		lenis?.raf(time)
		window.requestAnimationFrame(handleFrame)
	}

	createEventListener({
		eventName: 'popstate',
		target: () => window,
		listener: handlePopstate,
	})

	onMount(() => {
		lenis = new Lenis(options)

		window.requestAnimationFrame(handleFrame)
	})

	onCleanup(() => {
		lenis?.destroy()
	})

	return {
		onScroll,
		activeSectionId,
		setActiveSectionId,
	}
}
