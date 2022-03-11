<script lang="ts">
	import successIcon from '../../assets/icons/success.svg';
	import { fade } from 'svelte/transition';
</script>

<article class="flex bg-bg-light px-4 py-2 rounded-lg" role="alert" transition:fade>
	<img class="" src={successIcon} alt="sucess" />

	<div class="ml-2">
		<slot />
	</div>
</article>
