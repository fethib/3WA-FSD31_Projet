<script lang="ts">
	export let type: 'text' | 'password' = 'text';
	export let value: string = '';
	export let name: string = 'textAndPasswordInput';
	export let rules: Rules = { minLength: 1, maxLength: 255 };
	export let hasErrors: boolean = false;
	export let message: string = "Message d'information à l'utilisateur.";

	import StatusMessage from '$components/StatusMessage.svelte';

	interface Rules {
		minLength: number;
		maxLength: number;
	}

	const CSS =
		'p-2 transition-all border-2 rounded appearance-none bg-card dark:bg-card-dark border-stroke dark:border-stroke-dark';
	const hoverCSS = 'hover:border-font-primary dark:hover:border-font-darkPrimary';
	const activeCSS = 'active:border-font-primary dark:active:border-font-darkPrimary';
	const focusCSS =
		'focus:ring-font-primary dark:active:ring-font-darkPrimary focus:ring-2 focus:ring-offset-2 focus:ring-offset-page dark:focus:ring-offset-page-dark';
	const invalidCSS = 'invalid:border-accent-red dark:invalid:border-accent-darkRed';
</script>

<div class="flex flex-col gap-2">
	<label for={name} class="text-sm"> <slot>Champ de saisie</slot> </label>

	{#if type == 'password'}
		<input
			type="password"
			{name}
			id={name}
			class=" {CSS} {hoverCSS} {activeCSS} {focusCSS} {invalidCSS}"
			minlength={rules.minLength}
			maxlength={rules.maxLength}
			bind:value
			{...$$restProps}
		/>
	{:else}
		<input
			type="text"
			{name}
			id={name}
			class=" {CSS} {hoverCSS} {activeCSS} {focusCSS} {invalidCSS}"
			minlength={rules.minLength}
			maxlength={rules.maxLength}
			bind:value
			{...$$restProps}
		/>
	{/if}

	{#if hasErrors}
		<StatusMessage type="error">{message}</StatusMessage>
	{/if}
</div>
