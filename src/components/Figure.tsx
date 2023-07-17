import { type ParentComponent, Show } from 'solid-js'
import * as css from './Figure.css'

export const Figure: ParentComponent<{
	src: string
	width: number
	alt: string
}> = (props) => {
	return (
		<figure class={css.root}>
			{/*
				jampack will post process all picture elements and
				add all the necessary sources for maximum optimisation
				it will also add width and height attributes to avoid
				layout changes
			*/}
			<picture>
				<img
					src={props.src}
					// The src will be incorrect after SSR'd by Solid.
					// data-image is here so we can target and map
					// this to it's correct version from manifest.json.
					// You should figure out a way to do this more
					// generically in the future
					data-image
					width={props.width}
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
