<script lang="ts">
	export let type: 'button' | 'submit' = 'button';
	export let href: string | null = null;

	const css =
		'flex items-center justify-center flex-grow gap-2 px-3 py-2 transition-all rounded-md bg-button dark:bg-button-dark text-font-primary dark:text-font-darkPrimary hover:bg-button-hover hover:dark:bg-button-darkHover disabled:opacity-30 disabled:hover:bg-button dark:disabled:hover:bg-button-dark';
</script>

{#if href}
	<a {href} class={css} {...$$restProps}>
		<slot>Lien en forme de Bouton</slot>
	</a>
{:else}
	<button {type} class={css} on:click {...$$restProps}>
		<slot>Bouton</slot>
	</button>
{/if}
