import LayoutMain from '@/components/layout-main'
import Link from '@/components/link'
import Text from '@/components/text'

export default function Index() {
	return (
		<LayoutMain
			sections={[
				{
					title: 'About',
					content: (
						<>
							<Text as="h1" variant="heading-m">
								Levi Ceccato
							</Text>
							<Text as="p" variant="body-s">
								I’m a multidisciplinary designer based in Townsville‚ Australia.
								My passion for design drives me to explore all of it’s avenues‚
								including illustration‚ graphic design and software development.
								I’m currently developing
								<Link to="https://www.most.org.au">MOST</Link>
								at
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
