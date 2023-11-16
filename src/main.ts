import 'modern-normalize/modern-normalize.css'
import './main.css'
import Lenis from '@studio-freight/lenis'

// Init Lenis smooth scrolling
const lenis = new Lenis()
function raf(time: number) {
	lenis.raf(time)
	requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

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

		lenis.scrollTo(targetEl)
	})
}
