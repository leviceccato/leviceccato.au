import Link from '@/components/link'
import Text from '@/components/text'
import { createSmoothScroll } from '@/primitives/smooth-scroll'
import { slugify } from '@/utils/misc'
import { For, type JSX, createMemo } from 'solid-js'
import * as css from './layout-main.css'

/**
 * Rather than having a single child like most layouts, this one splits
 * them up into sections, that way on page navigation can be more easily
 * managed.
 */
export default function LayoutMain(props: {
	sections: { title: string; content: JSX.Element }[]
}) {
	const smoothScroll = createSmoothScroll()

	const sectionRefs: HTMLElement[] = []

	const sections = createMemo(() => {
		return props.sections.map((section) => {
			return {
				id: slugify(section.title),
				linkText: section.title,
				content: section.content,
			}
		})
	})

	smoothScroll.onScroll((instance) => {
		const centreScroll = instance.scroll + instance.rootElement.clientHeight / 2

		let closestSectionRef: HTMLElement | undefined

		for (const sectionRef of sectionRefs) {
			if (
				-sectionRef.offsetTop < centreScroll &&
				sectionRef.offsetTop >
					(closestSectionRef?.offsetTop ?? Number.POSITIVE_INFINITY)
			) {
				closestSectionRef = sectionRef
			}
		}

		if (closestSectionRef) {
			smoothScroll.setActiveSectionId(closestSectionRef.id)
		}
	})

	return (
		<div>
			<nav class={css.nav}>
				<For each={sections()}>
					{(section) => (
						<Link class={css.link} to={`#${section.id}`}>
							<Text variant="body-l">{section.linkText}</Text>
						</Link>
					)}
				</For>
			</nav>
			<main>
				<For each={sections()}>
					{(section) => (
						<div
							id={section.id}
							class={css.section}
							ref={(ref) => sectionRefs.push(ref)}
						>
							{section.content}
						</div>
					)}
				</For>
			</main>
		</div>
	)
}
