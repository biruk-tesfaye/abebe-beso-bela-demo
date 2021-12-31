<script lg="ts">
	import githubIcon from '$lib/assets/icons/github.svg';
</script>

<div class="w-full h-screen flex">
	<div class={'w-[410px] h-screen bg-white p-8 flex-shrink-0'}>
		<div class="flex justify-between flex-col h-full">
			<div class="grid gap-32">
				<div class="flex justify-between w-full">
					<img src={githubIcon} alt="github" />

					<!-- dark mode toggle button -->
					<button id="theme-toggle" type="button" class="">
						<!-- half moon svg -->
						<svg
							class="w-6 h-6 "
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
						</svg>

						<!-- shining sun svg -->
						<svg
							class="w-6 h-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								fill-rule="evenodd"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>

				<div class="grid gap-16">
					<h4 class={'text-2xl text-primary-default'}>Generate random amharic placeholder text</h4>
					<div class="grid gap-8">
						<input type="number" class="w-full h-10 border rounded bg-bg-light" />
						<div class="grid gap-8">
							<!-- three radio inputs -->
							<label for="words">
								<input type="radio" id="words" name="scope" value="WORDS" />
								<span>words</span>
							</label>
							<label for="sentences">
								<input type="radio" id="sentences" name="scope" value="SENTENCES" />
								<span>sentences</span>
							</label>
							<label for="paragraphs">
								<input type="radio" id="paragraphs" name="scope" value="PARAGRAPHS" />
								<span>paragraphs</span>
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

	<div class={'h-screen w-full bg-bg-light'} />
</div>
