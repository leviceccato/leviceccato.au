import { type Component, For } from 'solid-js'
import { Container } from '#/components/Container'
import { useLocation } from '@solidjs/router'
import { getChildRoutes } from '#/data/routes'

export const Listing: Component = () => {
	const location = useLocation()

	const childRoutes = getChildRoutes(location.pathname)

	return (
		<Container>
			<For each={childRoutes}>{(route) => <p>{route.filePath}</p>}</For>
		</Container>
	)
}
