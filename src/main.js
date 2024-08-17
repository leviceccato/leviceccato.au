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
