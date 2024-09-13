import LayoutMain from '@/components/layout-main'

export default function Index() {
	return (
		<LayoutMain
			sections={[
				{ id: 'about', linkText: 'About', content: <div>Helo</div> },
				{ id: 'artwork', linkText: 'Artwork', content: <div>Helo</div> },
				{ id: 'software', linkText: 'Software', content: <div>Helo</div> },
			]}
		/>
	)
}
