import { type Component } from 'solid-js'
import { Nav } from '#/components/Nav'
import * as css from './Footer.css'

export const Footer: Component = () => (
	<footer class={css.root}>
		<Nav
			position="end"
			columns={[null, [{ url: '#main', text: 'Back to top' }], null]}
		/>
	</footer>
)
