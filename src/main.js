import Lenis from 'lenis'
import mediumZoom from 'medium-zoom'

const lenis = new Lenis()

lenis.on('scroll', (event) => {
	console.log(event)
})

function handleFrame(time) {
	lenis.raf(time)

	requestAnimationFrame(handleFrame)
}

requestAnimationFrame(handleFrame)

function handleNavLinkClick(event) {
	event.preventDefault()

	const href = event.target.getAttribute('href')

	lenis.scrollTo(href)
}

const navLinks = document.querySelectorAll('[data-nav-link]')

for (const navLink of navLinks) {
	navLink.addEventListener('click', handleNavLinkClick)
}
