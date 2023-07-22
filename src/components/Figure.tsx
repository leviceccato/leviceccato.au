import { createMemo, type ParentComponent, Show } from 'solid-js'
import { parseImagePath } from '#/utils/misc'
import * as css from './Figure.css'

const isDev = import.meta.env.DEV

export const Figure: ParentComponent<{
	src: string
	alt: string
}> = (props) => {
	const data = createMemo(() => parseImagePath(props.src))

	return (
		<figure class={css.root}>
			<picture>
				<source
					// srcset is only the same during development. After
					// prerendering, this is updated to the path of the
					// optimised AVIF
					srcset={isDev ? props.src : `${data().path}.avif`}
					type="image/avif"
				/>
				<img
					src={props.src}
					// During development we don't know the size of the
					// image so layout changes will occur, but our post-
					// build script will set corresponding height after
					// it optimises the images.
					width={data().width}
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
