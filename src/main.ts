import 'modern-normalize/modern-normalize.css'
import './main.css'
import Lenis from '@studio-freight/lenis'

// // Init Lenis smooth scrolling
const lenis = new Lenis({
	wrapper: document.querySelector('[data-main]') as HTMLElement,
	content: document.querySelector('[data-main-container]') as HTMLElement,
})
function raf(time: number) {
	lenis.raf(time)
	requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Attempt to scroll to hash if it exists
const targetEl = document.querySelector(window.location.hash)
if (targetEl) {
	targetEl.scrollIntoView({ behavior: 'instant' })
}

// Progressively enhance link behaviour
const headerLinkEls =
	document.querySelectorAll<HTMLAnchorElement>('[data-header-link]')
for (const linkEl of headerLinkEls) {
	const href = linkEl.getAttribute('href')
	if (!href) {
		continue
	}

	const targetEl = document.querySelector(href)
	if (!targetEl) {
		continue
	}

	linkEl.addEventListener('click', (event) => {
		event.preventDefault()

		targetEl.scrollIntoView({ behavior: 'instant' })
	})
}
