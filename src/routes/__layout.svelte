<script lang="ts">
	import Header from '$lib/components/_shared/header.svelte';
	import '../app.css';
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
