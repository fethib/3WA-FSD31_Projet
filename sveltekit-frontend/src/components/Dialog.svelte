<script lang="ts">
	export let handleClose: svelte.JSX.MouseEventHandler<HTMLButtonElement> | null = null;

	import Heading from '$components/Heading.svelte';
	import Icon from '$components/Icon.svelte';
</script>

<div
	class="absolute z-50 flex flex-col items-center justify-center w-screen h-screen p-5 bg-black bg-opacity-40"
>
	<dialog
		class="flex flex-col p-4 overflow-hidden border rounded-md bg-card dark:bg-card-dark border-stroke dark:border-stroke-dark text-font-primary dark:text-font-darkPrimary"
		open
	>
		<div class="relative flex items-center pb-3 border-b border-stroke dark:border-stroke-dark">
			<Heading level={4} class="flex-grow">
				<slot name="title">Fenêtre de dialogue</slot>
			</Heading>

			<button
				type="button"
				on:click={handleClose}
				class="flex items-center justify-center transition-all rounded-full text-font-secondary black:text-font-darkSecondary hover:text-font-primary dark:hover:text-font-darkPrimary"
			>
				<Icon name="x-mark" />
			</button>
		</div>

		<div class="relative py-3">
			<div class="flex flex-col gap-3 overflow-y-auto max-h-96">
				<slot name="content" />
			</div>
		</div>

		<div
			class="flex flex-col items-stretch gap-2 pt-4 border-t border-stroke dark:border-stroke-dark"
		>
			<slot name="buttons" />
		</div>
	</dialog>
</div>
