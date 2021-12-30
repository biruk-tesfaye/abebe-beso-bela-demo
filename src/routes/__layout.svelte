<script lang="ts">
	import '$lib/styles/tailwind.css';
	import '$lib/styles/app.css';
	import Header from '$lib/components/_shared/header.svelte';
</script>

<Header />

<main style={`height: `}>
	<slot />
</main>

<footer>
	<p>Contact me <a href="https://biruk.kelaltech.com">here</a></p>
</footer>

<style>
</style>
