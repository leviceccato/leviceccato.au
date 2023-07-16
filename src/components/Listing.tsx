import { type Component, For, lazy } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { Container } from '#/components/Container'
import { useLocation } from '@solidjs/router'
import { getChildRoutes, type Meta } from '#/data/routes'

export const Listing: Component = () => {
	const location = useLocation()
	const childRoutes = getChildRoutes(location.pathname)

	return (
		<Container>
			<For each={childRoutes}>
				{(route) => <Dynamic component={createListItem(route.meta)} />}
			</For>
		</Container>
	)
}

function createListItem(meta: () => Promise<Meta>) {
	return lazy(async () => {
		const _meta = await meta()

		return {
			default: () => (
				<>
					<h1>{JSON.stringify(_meta)}</h1>
				</>
			),
		}
	})
}
