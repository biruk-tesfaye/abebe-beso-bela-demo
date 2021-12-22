<script lang="ts">
	let amount: number = 1;
	let start = false;
	let scope = 'PARAGRAPH';

	let resScope = 'PARAGRAPH';

	let submit = false;

	let generatedData = [];

	function generateLorem() {
		submit = true;
		fetch('/api/generate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				amount: amount,
				start: start,
				scope: scope
			})
		})
			.then((response) => response.json())
			.then((data) => {
				submit = false;
				console.log('Data:', data);
				generatedData = data.generated;
				resScope = data.scope;
			})
			.catch(() => {
				console.error;
				submit = false;
			});
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Welcome</h1>
	<p>Abebe Beso bela</p>

	<form on:submit|preventDefault={generateLorem}>
		<!-- define number input value -->
		<label for="amount">
			<input type="number" name="amount" id="amount" bind:value={amount} min="1" max="100" />
		</label>

		<label for="paragraph">
			<input
				type="radio"
				id="paragraph"
				name="scope"
				bind:group={scope}
				value="PARAGRAPH"
				checked
			/>
			<span>paragraph</span>
		</label>
		<label for="words">
			<input type="radio" id="words" name="scope" bind:group={scope} value="WORDS" />
			<span>words</span>
		</label>

		<!-- define check box input  -->
		<label for="checkbox">
			<input type="checkbox" id="checkbox" name="checkbox" bind:checked={start} />
			<span>Start with abebe beso bela</span>
		</label>

		<!-- define submit button -->
		<button type="submit">Generate</button>
	</form>

	{#if submit}
		<div>loading...</div>
	{:else if generatedData.length === 0}
		<div>
			<p>No data found</p>
		</div>
	{:else if generatedData.length > 0}
		<div>
			{#if resScope === 'PARAGRAPH'}
				{#each generatedData as data}
					<p>{data}</p>
				{/each}
			{:else if resScope === 'WORDS'}
				{generatedData.join(' ')}
			{/if}
		</div>
	{/if}
</section>

<style>
</style>
