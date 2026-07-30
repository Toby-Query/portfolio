<script lang="ts">
	import '../app.css';
	import { MetaTags, JsonLd } from 'svelte-meta-tags';

	let { children } = $props();

	const SITE = 'https://thups-dev.vercel.app';
	const OG_IMAGE = `${SITE}/og-image.png`;
	const TITLE = 'Thups Mukhunyeledzi | Software Engineer & Dev Log';
	const DESCRIPTION =
		'Portfolio of Thups Mukhunyeledzi, a Software Engineer at BBD building cross-platform mobile apps with React Native and Expo, and web apps with Next.js and SolidJS. Wits alumni and founder of Sandy Gift.';
	const IMAGE_ALT = 'Thups Mukhunyeledzi — Software Engineer at BBD, Wits alumni';
</script>

<MetaTags
	title={TITLE}
	description={DESCRIPTION}
	canonical={SITE}
	openGraph={{
		type: 'website',
		url: SITE,
		title: TITLE,
		description: DESCRIPTION,
		siteName: 'Thups Dev Log',
		locale: 'en_ZA',
		images: [
			{
				url: OG_IMAGE,
				secureUrl: OG_IMAGE,
				type: 'image/png',
				width: 1200,
				height: 630,
				alt: IMAGE_ALT
			}
		]
	}}
	twitter={{
		creator: '@thups_dev',
		site: '@thups_dev',
		cardType: 'summary_large_image',
		title: TITLE,
		description: 'Software Engineer at BBD | Wits Alumni | Founder of Sandy Gift',
		image: OG_IMAGE,
		imageAlt: IMAGE_ALT
	}}
	keywords={[
		'Thups Mukhunyeledzi',
		'Muthuphei Mukhunyeledzi',
		'Software Engineer',
		'React Native',
		'Expo',
		'Next.js',
		'SolidJS',
		'BBD',
		'Wits Alumni',
		'Azure',
		'AWS',
		'Sandy Gift'
	]}
	additionalMetaTags={[{ name: 'author', content: 'Muthuphei Mukhunyeledzi' }]}
/>

<JsonLd
	schema={{
		'@type': 'Person',
		name: 'Muthuphei Mukhunyeledzi',
		alternateName: 'Thups Mukhunyeledzi',
		url: SITE,
		image: OG_IMAGE,
		jobTitle: 'Software Engineer',
		email: 'mailto:muthupheimukhunyeledzi@gmail.com',
		description: DESCRIPTION,
		worksFor: { '@type': 'Organization', name: 'BBD' },
		alumniOf: {
			'@type': 'CollegeOrUniversity',
			name: 'University of the Witwatersrand'
		},
		knowsAbout: [
			'React Native',
			'Expo',
			'Next.js',
			'SolidJS',
			'Svelte',
			'TypeScript',
			'Azure',
			'AWS',
			'Docker'
		],
		sameAs: [
			'https://www.linkedin.com/in/mukhunyeledzi-muthuphei-76b813273/',
			'https://sandygift.app'
		]
	}}
/>

<main>
	{@render children()}
</main>

<style>
	main {
		min-height: 100vh;
	}
</style>
