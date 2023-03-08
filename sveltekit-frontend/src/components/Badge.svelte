<script lang="ts">
	export let type: 'default' | 'success' | 'danger' | 'player' = 'default';

	const defaultCSS =
		'text-font-primary dark:text-font-darkPrimary bg-font-primary/10 dark:bg-font-darkPrimary/10';
	const successCSS = 'text-accent-green bg-accent-green/10';
	const dangerCSS = 'text-accent-red bg-accent-red/10';
	const playerCSS = 'text-accent-player bg-accent-player/10';

	$: css = accent();

	const accent = () => {
		switch (type) {
			case 'success':
				return successCSS;
				break;

			case 'danger':
				return dangerCSS;
				break;

			case 'player':
				return playerCSS;
				break;

			default:
				return defaultCSS;
				break;
		}
	};
</script>

<div class="flex px-3 py-1 rounded-full items-center gap-1 text-xs {css}">
	<slot>{type}</slot>
</div>
