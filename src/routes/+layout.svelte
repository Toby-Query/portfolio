<script lang="ts">
	import '../app.css';
	import { MetaTags } from 'svelte-meta-tags';

	let { children } = $props();
</script>

<MetaTags
	title="Thups Mukhunyeledzi | Systems Engineer & Dev Log"
	description="Portfolio of Muthuphei Mukhunyeledzi, a Systems Engineer at BBD focusing on scalable architecture, Java/Spring services, and cloud optimizations."
	canonical="https://thups-dev.vercel.app"
	openGraph={{
		type: 'website',
		url: 'https://thups-dev.vercel.app',
		title: 'Thups Mukhunyeledzi | Systems Engineer & Dev Log',
		description: 'Portfolio of Thups Mukhunyeledzi, a Systems Engineer at BBD focusing on scalable architecture.',
		siteName: 'Thups Dev Log',
		images: [
			{
				url: '/profile_sketch.png',
				width: 1200,
				height: 630,
				alt: 'Thups Mukhunyeledzi Profile Sketch'
			}
		]
	}}
	twitter={{
		creator: '@thups_dev',
		site: '@thups_dev',
		cardType: 'summary_large_image',
		title: 'Thups Mukhunyeledzi | Systems Engineer',
		description: 'Systems Engineer at BBD | Wits Alumni',
		image: '/profile_sketch.png',
		imageAlt: 'Thups Mukhunyeledzi Profile Sketch'
	}}
	keywords={['Systems Engineer', 'Software Developer', 'BBD', 'Wits Alumni', 'Java', 'Cloud Architecture']}
	additionalMetaTags={[
		{
			name: 'author',
			content: 'Muthuphei Mukhunyeledzi'
		}
	]}
/>

<main>
	{@render children()}
</main>

<style>
	main {
		min-height: 100vh;
	}
</style>
