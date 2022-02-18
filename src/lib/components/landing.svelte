<script lang="ts">
	import githubIcon from '$lib/assets/icons/github.svg';
	import copyIcon from '$lib/assets/icons/copy-icon.svg';

	import CopyToClipboard from '$lib/utils/copy-to-clipboard.svelte';

	let copytext = '';
	let amount: number = 1;
	let start = false;
	let scope = 'WORDS';
	let resScope = 'WORDS';

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
				generatedData = data.generated;
				resScope = data.scope;

				if (data.scope === 'WORDS') {
					copytext = data.generated.join(' ');
				} else if (data.scope === 'PARAGRAPHS') {
					copytext = data.generated.join('\n');
				} else {
					copytext = data.generated.join('');
				}
			})
			.catch(() => {
				console.error;
				submit = false;
			});
	}

	const copy = () => {
		const app = new CopyToClipboard({
			target: document.getElementById('clipboard'),
			props: {
				text: copytext
			}
		});
		app.$destroy();
	};
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="w-full h-screen flex">
	<div class={'w-[410px] h-screen bg-white p-8 flex-shrink-0'}>
		<div class="flex justify-between flex-col h-full">
			<div class="grid gap-16">
				<div class="flex justify-between w-full items-center">
					<img src={githubIcon} class="w-8 h-8" alt="github" />

					<!-- dark mode toggle button -->
					<label for="dark-mode-toggle" class="w-14 h-7 flex rounded-full bg-secondary-default">
						<input type="checkbox" id="dark-mode-toggle" class="peer hidden" />
						<span
							class="peer-checked:before:ml-5 flex  dark-mode-toggle items-center w-full px-2 before:bg-white"
						/>
					</label>
				</div>

				<div class="grid gap-8">
					<h4 class={'text-2xl text-primary-default'}>Generate random amharic placeholder text</h4>
					<form on:submit|preventDefault={generateLorem} class="grid gap-8">
						<input
							type="number"
							bind:value={amount}
							min="1"
							max="100"
							class="pl-2 w-full h-10 border rounded bg-bg-light"
						/>
						<div class="grid gap-4">
							<!-- three radio inputs -->
							<label
								for="words"
								class="flex cursor-pointer font-medium overflow-hiddenitems-center "
							>
								<input
									checked
									type="radio"
									id="words"
									name="scope"
									value="WORDS"
									class="peer hidden"
									bind:group={scope}
								/>
								<span
									class="input-span peer-checked:bg-primary-ex-light peer-checked:before:shadow-input-checked"
									>words</span
								>
							</label>
							<label
								for="sentences"
								class="flex cursor-pointer font-medium overflow-hidden items-center "
							>
								<input
									type="radio"
									id="sentences"
									name="scope"
									value="SENTENCES"
									class="peer hidden "
									bind:group={scope}
								/>
								<span
									class="input-span peer-checked:bg-primary peer-checked:before:shadow-input-checked"
									>sentences</span
								>
							</label>
							<label
								for="paragraphs"
								class="flex cursor-pointer font-medium overflow-hidden items-center "
							>
								<input
									type="radio"
									id="paragraphs"
									name="scope"
									value="PARAGRAPHS"
									class="peer hidden "
									bind:group={scope}
								/>
								<span
									class="input-span peer-checked:bg-primary peer-checked:before:shadow-input-checked"
									>paragraphs</span
								>
							</label>
							<label
								for="startWithAbebe"
								class="flex cursor-pointer font-medium overflow-hidden items-center"
							>
								<input
									type="checkbox"
									id="startWithAbebe"
									name="startWithAbebe"
									class="peer hidden"
									bind:checked={start}
								/>
								<span
									class="input-checkbox peer-checked:bg-primary peer-checked:before:shadow-input-checked"
									>Start with Abebe Beso Bela</span
								>
							</label>
						</div>

						<button type="submit" class="w-full bg-primary-default px-4 py-3 rounded text-white"
							>Generate</button
						>
					</form>
				</div>
			</div>

			<div class="flex justify-between w-full">
				<span>About</span>
				<span>Contact</span>
			</div>
		</div>
	</div>

	<div class={'h-screen w-full bg-bg-light pb-16 pt-32'}>
		<div
			class="max-w-[720px] w-3/4 max-h-[calc(100vh-192px)] overflow-y-hidden relative   my-0 mx-auto   flex flex-col"
		>
			<div class="grid  gap-6 mb-16">
				<h1 class=" text-7xl">Abebe Beso Bela</h1>

				<p class="text-lg ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus pretium at dictum aenean
					lacus, porttitor ac quam. A ut turpis augue feugiat mollis nisl dignissim. Massa pretium
					ligula vel laoreet malesuada. Ut a mi adipiscing metus, sed turpis leo.
				</p>
			</div>

			<div
				class="bg-white overflow-y-auto  flex-1  flex flex-col p-4 rounded-lg text-primary-default"
			>
				<!-- copy icon -->
				<button on:click={copy} class=" justify-center items-center self-end mb-4">
					<img src={copyIcon} alt="copy icon" />
				</button>
				<div id={'clipboard'} class="w-full  ">
					{#if submit}
						<div>loading...</div>
					{:else if generatedData.length === 0}
						<div>
							<p>your generated text will be here</p>
						</div>
					{:else if generatedData.length > 0}
						<div>
							{#if resScope === 'PARAGRAPHS' || resScope === 'SENTENCES'}
								{#each generatedData as data}
									<p>{start ? `አበበ በሶ በላ ${data}` : data} <br /><br /></p>
								{/each}
							{:else}
								{generatedData.join(' ')}
							{/if}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
