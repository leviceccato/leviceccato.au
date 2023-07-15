import { For, createMemo, type ParentComponent, Show } from 'solid-js'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as css from './Figure.css'

// vite-imagetools metadata type, must be manually defined as it isn't exported.
// see: https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
type OutputMetadata = {
	src: string
	width: number
	height: number
	format: string
	// The following options are the same as sharps input options
	space: string
	channels: number
	density: Number
	depth: string
	hasAlpha: boolean
	hasProfile: boolean
	isProgressive: boolean
}

export const Figure: ParentComponent<{
	images: OutputMetadata[]
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
