<script lg="ts">
	import githubIcon from '$lib/assets/icons/github.svg';
	import copyIcon from '$lib/assets/icons/copy-icon.svg';
</script>

<div class="w-full h-screen flex">
	<div class={'w-[410px] h-screen bg-white p-8 flex-shrink-0'}>
		<div class="flex justify-between flex-col h-full">
			<div class="grid gap-16">
				<div class="flex justify-between w-full items-center">
					<img src={githubIcon} class="w-8 h-8" alt="github" />

					<!-- dark mode toggle button -->
					<label for="dark-mode-toggle" class="w-16 h-8 flex rounded-full bg-secondary-default">
						<input type="checkbox" id="dark-mode-toggle" class="hidden" />
						<span class="flex dark-mode-toggle items-center px-2 before:bg-white" />
					</label>
				</div>

				<div class="grid gap-8">
					<h4 class={'text-2xl text-primary-default'}>Generate random amharic placeholder text</h4>
					<div class="grid gap-8">
						<input type="number" class="pl-2 w-full h-10 border rounded bg-bg-light" />
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
									class="peer hidden "
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
								/>
								<span
									class="input-checkbox peer-checked:bg-primary peer-checked:before:shadow-input-checked"
									>Start with Abebe Beso Bela</span
								>
							</label>
						</div>

						<button class="w-full bg-primary-default px-4 py-3 rounded text-white">Generate</button>
					</div>
				</div>
			</div>

			<div class="flex justify-between w-full">
				<span>About</span>
				<span>Contact</span>
			</div>
		</div>
	</div>

	<div class={'h-screen w-full bg-bg-light '}>
		<div class="max-w-[720px] w-3/4  my-0 mx-auto pt-32 grid gap-16">
			<div class="grid  gap-6">
				<h1 class=" text-7xl">Abebe Beso Bela</h1>

				<p class="text-lg ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus pretium at dictum aenean
					lacus, porttitor ac quam. A ut turpis augue feugiat mollis nisl dignissim. Massa pretium
					ligula vel laoreet malesuada. Ut a mi adipiscing metus, sed turpis leo.
				</p>
			</div>

			<div class="bg-white flex flex-col p-4 rounded-lg text-primary-default">
				<!-- copy icon -->
				<div class="flex justify-center items-center self-end mb-4">
					<img src={copyIcon} alt="copy icon" />
				</div>
				<p class="w-full">your generated text will be here</p>
			</div>
		</div>
	</div>
</div>
