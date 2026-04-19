<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Thups Mukhunyeledzi | Sketch Portfolio</title>
</svelte:head>

<main>
	{@render children()}
</main>

<style>
	main {
		min-height: 100vh;
	}
</style>
