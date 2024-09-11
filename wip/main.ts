// import Lenis from 'lenis'
// import mediumZoom from 'medium-zoom'

// let lenis: Lenis | undefined
// let activeSectionId = ''

// function setActiveSectionId(sectionId: string): void {
// 	activeSectionId = sectionId

// 	history.pushState(undefined, '', `#${sectionId}`)
// }

// function initLenis(): void {
// 	lenis = new Lenis()

// 	function handleFrame(time: DOMHighResTimeStamp) {
// 		lenis?.raf(time)
// 		requestAnimationFrame(handleFrame)
// 	}
// 	requestAnimationFrame(handleFrame)
// }

// function initHistoryListener(): void {
// 	addEventListener('popstate', () => {
// 		if (!location.hash) {
// 			return
// 		}

// 		const section = document.querySelector(location.hash)
// 		if (!(section instanceof HTMLElement)) {
// 			return
// 		}

// 		lenis?.scrollTo(section)
// 	})
// }

// function initSectionObserver(): void {
// 	const navLinks = document.querySelectorAll('[data-nav-link]')
// 	const sections: HTMLElement[] = []

// 	for (const navLink of navLinks) {
// 		const href = navLink.getAttribute('href')
// 		if (!href) {
// 			continue
// 		}

// 		const section = document.querySelector(href)
// 		if (!(section instanceof HTMLElement)) {
// 			continue
// 		}

// 		sections.push(section)
// 	}

// 	lenis?.on('scroll', (instance: Lenis) => {
// 		const centreScroll = instance.scroll + innerHeight / 2

// 		let closestSection: HTMLElement | undefined

// 		console.log(sections.map((s) => s.offsetTop))
// 		console.log(centreScroll)

// 		for (const section of sections) {
// 			const closestOffset =
// 				closestSection?.offsetTop ?? Number.POSITIVE_INFINITY

// 			if (
// 				section.offsetTop < centreScroll &&
// 				section.offsetTop > closestOffset
// 			) {
// 				closestSection = section
// 			}
// 		}

// 		if (!closestSection) {
// 			return
// 		}

// 		setActiveSectionId(closestSection.id)
// 	})
// }

// initLenis()
// initHistoryListener()
// initSectionObserver()
