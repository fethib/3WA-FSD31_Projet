<script lang="ts">
	export let type: 'loading' | 'info' | 'warning' | 'error' | 'success' = 'info';

	import LoadingIndicator from '$components/indicators/LoadingIndicator.svelte';
	import InfoIndicator from '$components/indicators/InfoIndicator.svelte';
	import WarningIndicator from '$components/indicators/WarningIndicator.svelte';
	import ErrorIndicator from '$components/indicators/ErrorIndicator.svelte';
	import SuccessIndicator from '$components/indicators/SuccessIndicator.svelte';

	const indicators: Object = {
		loading: LoadingIndicator,
		info: InfoIndicator,
		warning: WarningIndicator,
		error: ErrorIndicator,
		success: SuccessIndicator
	};
</script>

<div
	role="status"
	class="flex items-center max-w-sm gap-2 text-xs text-font-secondary dark:text-font-darkSecondary"
	class:text-accent-player={type === 'info'}
	class:dark:text-accent-darkPlayer={type === 'info'}
	class:text-amber-600={type === 'warning'}
	class:dark:text-amber-600={type === 'warning'}
	class:text-accent-red={type === 'error'}
	class:dark:text-accent-darkRed={type === 'error'}
	class:text-accent-green={type === 'success'}
	class:dark:text-accent-darkGreen={type === 'success'}
>
	<svelte:component this={indicators[type]} />
	<span><slot>Message de statut</slot></span>
</div>
