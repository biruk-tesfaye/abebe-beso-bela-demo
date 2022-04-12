<script lang="ts">
	import { theme } from '../../stores/them-store';
	import githubIcon from '$lib/assets/icons/github.svg';
	import githubLightIcon from '$lib/assets/icons/github-light.svg';
	import Toast from '../components/_shared/toast.svelte';
	import copyIcon from '$lib/assets/icons/copy-icon.svg';
	import { generate } from 'abebe-beso-bela';
	import { copy } from 'svelte-copy';

	let copyBtn: HTMLButtonElement;
	let scrollTOElement;

	let copytext = '';
	let amount: number = 1;
	let start = false;
	let scope: 'PARAGRAPHS' | 'WORDS' | 'SENTENCES' = 'WORDS';

	// set default store theme value to dark
	$theme = 'dark';

	$: isDark = $theme === 'dark';
	const toggleDarkMode = () => {
		$theme = isDark ? 'light' : 'dark';
	};

	let submit = false;

	let generatedData = [];

	function generateLorem() {
		submit = true;

		generatedData = generate({
			amount,
			scope,
			startWith: start
		});

		if (scope === 'WORDS') {
			copytext = generatedData.join(' ');
		} else if (scope === 'PARAGRAPHS') {
			copytext = generatedData.join('\n');
		} else {
			copytext = generatedData.join('');
		}

		copyBtn.focus();
		scrollTOElement.scrollIntoView({ behavior: 'smooth' });

		submit = false;
	}

	let showToast = false;

	const handleToast = () => {
		showToast = true;
		setTimeout(() => {
			showToast = false;
		}, 2000);
	};
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#if showToast}
	<div class={'flex justify-center absolute right-8 top-8  '}>
		<Toast>Text copied</Toast>
	</div>
{/if}

<div class={`w-full h-screen flex flex-col lg:flex-row ${$theme === 'dark' ? 'dark' : ''} `}>
	<div class={'w-full lg:w-1/3 h-screen bg-white dark:bg-bg-dark p-4 pt-8 lg:p-8 '}>
		<div class="flex justify-between flex-col h-full">
			<div class="grid gap-16">
				<div class="flex justify-between w-full items-center">
					<a href="https://github.com/biruk-tesfaye/abebe-beso-bela">
						{#if $theme === 'dark'}
							<img src={githubLightIcon} class="w-8 h-8" alt="github" />
						{:else}
							<img src={githubIcon} class="w-8 h-8" alt="github" />
						{/if}
					</a>

					<!-- dark mode toggle button -->
					<label
						for="dark-mode-toggle"
						class="w-14 h-7 flex rounded-full bg-secondary-default dark:bg-secondary-text"
					>
						<input
							on:change={toggleDarkMode}
							bind:checked={isDark}
							type="checkbox"
							id="dark-mode-toggle"
							class="peer hidden"
						/>
						<span
							class="peer-checked:before:ml-5 flex  dark-mode-toggle items-center w-full px-2 before:bg-white dark:before:bg-primary-default"
						/>
					</label>
				</div>

				<div class="grid gap-8">
					<h4 class={'text-2xl text-primary-default dark:text-secondary-text'}>
						Generate random amharic placeholder text
					</h4>
					<form on:submit|preventDefault={generateLorem} class="grid gap-8">
						<input
							type="number"
							bind:value={amount}
							min="1"
							max="100"
							class="pl-2 w-full h-10 border border-primary-default dark:text-secondary-text outline-none rounded bg-bg-light dark:bg-primary-bg"
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
									class="input-span dark:text-secondary-text dark:before:bg-secondary-text  dark:hover:bg-primary-bg peer-checked:bg-primary-ex-light dark:peer-checked:bg-primary-bg peer-checked:before:shadow-input-checked"
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
									class="input-span dark:text-secondary-text dark:before:bg-secondary-text  dark:hover:bg-primary-bg peer-checked:bg-primary-ex-light dark:peer-checked:bg-primary-bg peer-checked:before:shadow-input-checked"
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
									class="input-span dark:text-secondary-text dark:before:bg-secondary-text  dark:hover:bg-primary-bg peer-checked:bg-primary-ex-light dark:peer-checked:bg-primary-bg peer-checked:before:shadow-input-checked"
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
									class="input-checkbox  peer-checked:bg-primary dark:hover:bg-primary-bg dark:peer-checked:bg-primary-bg dark:text-secondary-text peer-checked:before:shadow-input-checked"
									>Start with Abebe Beso Bela</span
								>
							</label>
						</div>

						<button
							type="submit"
							class="w-full duration-150 hover:bg-primary-bg bg-primary-default px-4 py-3 rounded text-white"
							>Generate</button
						>
					</form>
				</div>
			</div>

			<div class="hidden lg:flex dark:text-secondary-text justify-between w-full">
				<a
					href="/"
					class=" text-primary-default dark:text-secondary-text hover:underline duration-75"
					>About</a
				>
				<a
					href="/"
					class=" text-primary-default dark:text-secondary-text hover:underline duration-75"
					>Contributors</a
				>
			</div>
		</div>
	</div>

	<div
		class={'h-auto lg:h-screen w-full bg-white lg:bg-bg-light  dark:bg-primary-light px-4 lg:px-0  pt-32'}
	>
		<div
			class="w-full lg:max-w-[720px] lg:w-3/4 max-h-screen lg:max-h-[calc(100vh-192px)] overflow-y-hidden relative   my-0 mx-auto   flex flex-col"
		>
			<div class="grid  text-primary-default dark:text-secondary-text gap-6 mb-16">
				<h1 class=" text-7xl">Abebe Beso Bela</h1>

				<p class="text-lg ">
					Generate Amharic placeholder text. The project is named after a well-known Amharic
					sentence (አበበ በሶ በላ።) that is used to educate children how to construct sentences.
				</p>
			</div>

			<div
				bind:this={scrollTOElement}
				class=" relative bg-bg-light lg:bg-white dark:bg-secondary-text overflow-y-auto  flex-1  flex flex-col p-4 rounded-lg text-primary-default"
			>
				<!-- copy icon -->
				<button
					bind:this={copyBtn}
					use:copy={copytext}
					on:svelte-copy={handleToast}
					class=" focus:border-2 focus:rounded focus:shadow-xl  focus:border-secondary-default w-9 h-9  justify-center items-center self-end mb-4  sticky top-0 right-0 "
				>
					<img src={copyIcon} alt="copy icon" />
				</button>
				<div class="w-full  ">
					{#if submit}
						<div>loading...</div>
					{:else if generatedData.length === 0}
						<div>
							<p>your generated text will be here</p>
						</div>
					{:else if generatedData.length > 0}
						<div>
							<p>
								{#each generatedData as data}
									<p>{data} <br /><br /></p>
								{/each}
							</p>
						</div>
					{/if}
				</div>
			</div>
		</div>

		<div class="flex lg:hidden dark:text-secondary-text  p-8 pt-32  justify-between w-full">
			<a href="/" class=" text-primary-default dark:text-secondary-text hover:underline duration-75"
				>About</a
			>
			<a href="/" class=" text-primary-default dark:text-secondary-text hover:underline duration-75"
				>Contributors</a
			>
		</div>
	</div>
</div>
