<script lang="ts">
	export let inputName: string = 'checkbox';
	export let emoji: string | null = null;
	export let isChecked: boolean = false;

	import Icon from '$components/Icon.svelte';
</script>

<div>
	<input
		type="checkbox"
		id={inputName}
		name={inputName}
		class="hidden peer"
		bind:checked={isChecked}
	/>

	<label
		for={inputName}
		class="flex items-center w-full gap-1 py-2 text-sm transition-all cursor-pointer opacity-20 hover:opacity-100 peer-checked:opacity-100 text-font-primary dark:text-font-darkPrimary group"
		class:isChecked
	>
		{#if emoji}
			<span class="text-xs transition-all">{emoji}</span>
		{:else}
			<div
				class="flex items-center justify-center w-5 h-5 mr-1 rounded-sm bg-button dark:bg-button-dark aspect-square"
			>
				<Icon
					name="check"
					class="hidden w-3 h-3 text-font-primary dark:text-font-darkPrimary group-[.isChecked]:block"
				/>
			</div>
		{/if}
		<span><slot>Checkbox</slot></span>
	</label>
</div>
