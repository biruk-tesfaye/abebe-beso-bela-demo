<script lang="ts">
	let amount: number = 1;
	let start = false;
	let scope = 'PARAGRAPH';

	function generateLorem() {
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
				console.log('Data:', data);
				document.getElementById('lorem').innerHTML = data.data;
			})
			.catch((error) => console.error('Error:', error));
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

	<div>
		<p id="lorem" />
	</div>
</section>

<style>
</style>
