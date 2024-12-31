import LayoutMain from '@/components/layout-main'
import Link from '@/components/link'
import Text from '@/components/text'
import { description, title } from '@/data/copy'
import type { Meta } from '@/data/routes'

export const meta: Meta = {
	title: 'Home',
	description: 'asd',
}

export default function Index() {
	return (
		<LayoutMain
			meta={meta}
			sections={[
				{
					title: 'About',
					content: (
						<>
							<Text as="h1" variant="heading-m">
								{title}
							</Text>
							<Text as="p" variant="body-m">
								{description}
								I’m currently developing
								<Link to="https://www.most.org.au">MOST</Link> at
								<Link to="https://www.orygen.org.au">Orygen</Link>‚ a social
								platform that provides mental health support to young people.
							</Text>
						</>
					),
				},
				{ title: 'Artwork', content: <div>Helo</div> },
				{ title: 'Software', content: <div>Helo</div> },
			]}
		/>
	)
}
