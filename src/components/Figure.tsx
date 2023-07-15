import { For, createMemo, type ParentComponent, Show } from 'solid-js'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { type Image } from '#/utils/misc'
import * as css from './Figure.css'

export const Figure: ParentComponent<{
	images: Image[]
	alt: string
}> = (props) => {
	const images = createMemo(() => {
		const [fallbackImage, ...otherImages] = props.images
		return { fallbackImage, otherImages }
	})

	const aspectRatio = () => {
		const { width, height } = images().fallbackImage
		return height / width
	}

	return (
		<figure class={css.root}>
			<picture
				class={css.picture}
				style={assignInlineVars({
					[css.inlineSizeVar]: `${images().fallbackImage.width}px`,
					[css.aspectRatioVar]: String(aspectRatio()),
				})}
			>
				<For each={images().otherImages}>
					{(image) => (
						<source
							srcset={image.src}
							type={`image/${image.format}`}
						/>
					)}
				</For>
				<img
					src={images().fallbackImage.src}
					class={css.image}
					alt={props.alt}
				/>
			</picture>
			<Show when={props.children}>
				<figcaption class={css.caption}>{props.children}</figcaption>
			</Show>
		</figure>
	)
}
