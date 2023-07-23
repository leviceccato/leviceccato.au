import * as t from '#/toolkit'

export const meta = {
	title: 'Building a static site generator with SolidJS',
	description: 'asd',
}

export default t.route(meta, () => (
	<>
		<t.H1>Building a static site generator with SolidJS</t.H1>
		<t.P>
			This is mostly just an excuse to write about my processes and findings in
			building this site (my site). An honourary and obligatory first post.
		</t.P>
		<t.H2>Introduction</t.H2>
		<t.P>
			There are many different offerings when it comes to static site
			generators, but they generally fall into two categories; the static,
			template based generators (e.g. Hugo, Eleventy, Zola) and the JavaScript
			meta-frameworks (e.g. Next.js, Nuxt, SvelteKit). The former offer more
			simplicity of development and SSG-specific features while the latter offer
			a lot more power and flexibility with the ability to use common framework
			components.
		</t.P>
		<t.P>
			When deciding on the stack for this site I was attracted to the pros of
			both categories. The idea of authoring content using a framework was
			sounding very good. But the complexity introduced by a meta-framework was
			not really something I wanted to face for the life of this site.
		</t.P>
		<t.P>
			After some investigation the pieces fell into place for a good middle
			ground solution. I was able to use my framework of choice, SolidJS, with
			TypeScript, I was able to get full static site generation with dynamic
			hydration and I was able to do it all in a fairly simple and maintainable
			way.
		</t.P>
		<t.P>
			The key piece of this puzzle is Vite and the vite-node package. With this
			a lot of the problems you would normally have faced have been solved for
			you. All that's left is routing and static generation.
		</t.P>
		<t.H2>Project setup</t.H2>
		<t.P>Create a project with your package manager of choice.</t.P>
		<p
			innerText={`
				{
					This is an example
				}
			`}
		/>
	</>
))
