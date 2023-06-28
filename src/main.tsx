import 'modern-normalize/modern-normalize.css'
import '#/base.css'
import { render, hydrate } from 'solid-js/web'
import { Router } from '@solidjs/router'
import App from '#/components/App'

export function createApp(url?: string) {
	return () => (
		<Router url={url}>
			<App />
		</Router>
	)
}

if (!import.meta.env.SSR) {
	const app = createApp()
	const root = document.getElementById('root')!

	if (import.meta.env.DEV) {
		render(app, root)
	} else {
		hydrate(app, root)
	}
}
