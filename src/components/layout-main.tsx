import Clickable from '@/components/clickable'
import Text from '@/components/text'
import { createSmoothScroll } from '@/primitives/smooth-scroll'
import { For, type JSX } from 'solid-js'
import * as css from './layout-main.css'

export default function LayoutMain(props: {
	sections: { id: string; linkText: string; content: JSX.Element }[]
}) {
	const smoothScroll = createSmoothScroll()

	const sectionRefsAndIds: { id: string; ref: HTMLElement }[] = []

	smoothScroll.onScroll((instance) => {
		const centreScroll = instance.scroll + instance.rootElement.clientHeight / 2

		let closestSectionRefAndId: { id: string; ref: HTMLElement } | undefined

		for (const sectionRefAndId of sectionRefsAndIds) {
			const closestOffset =
				closestSectionRefAndId?.ref.offsetTop ?? Number.POSITIVE_INFINITY

			if (
				sectionRefAndId.ref.offsetTop < centreScroll &&
				sectionRefAndId.ref.offsetTop > closestOffset
			) {
				closestSectionRefAndId = sectionRefAndId
			}
		}

		if (!closestSectionRefAndId) {
			return
		}

		smoothScroll.setActiveSectionId(closestSectionRefAndId.id)
	})

	return (
		<div>
			<nav class={css.nav}>
				<For each={props.sections}>
					{(section) => (
						<Clickable class={css.link} href={`#${section.id}`}>
							<Text is="body-s">{section.linkText}</Text>
						</Clickable>
					)}
				</For>
			</nav>
			<main>
				<For each={props.sections}>
					{(section) => (
						<div
							id={section.id}
							class={css.section}
							ref={(ref) => sectionRefsAndIds.push({ ref, id: section.id })}
						>
							{section.content}
						</div>
					)}
				</For>
			</main>
		</div>
	)
}
