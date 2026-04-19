<script lang="ts">
	import '../app.css';
	import { MetaTags } from 'svelte-meta-tags';

	let { children } = $props();
</script>

<MetaTags
	title="Thups Mukhunyeledzi | Software Engineer & Dev Log"
	description="Portfolio of Muthuphei Mukhunyeledzi, a Software Engineer at BBD specializing in React Native, Expo, and web technologies like Next.js and SolidJS."
	canonical="https://thups-dev.vercel.app"
	openGraph={{
		type: 'website',
		url: 'https://thups-dev.vercel.app',
		title: 'Thups Mukhunyeledzi | Software Engineer & Dev Log',
		description: 'Portfolio of Thups Mukhunyeledzi, a Software Engineer at BBD focusing on mobile and web development.',
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
		title: 'Thups Mukhunyeledzi | Software Engineer',
		description: 'Software Engineer at BBD | Wits Alumni',
		image: '/profile_sketch.png',
		imageAlt: 'Thups Mukhunyeledzi Profile Sketch'
	}}
	keywords={['Software Engineer', 'React Native', 'Expo', 'Next.js', 'SolidJS', 'BBD', 'Wits Alumni', 'Azure', 'AWS']}
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
