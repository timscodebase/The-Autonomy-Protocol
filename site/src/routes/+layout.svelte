<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "./global.css"

	import Header from '$components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="layout-wrapper">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>The Autonomy Project &copy; {new Date().getFullYear()}</p>
	</footer>
</div>

<style>
	.layout-wrapper {
		min-height: 100svh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>