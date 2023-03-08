<script context="module">
	import icons from '$lib/icons';

	export const iconsOptions = Object.keys(icons);
</script>

<script lang="ts">
	export let name: IconType = 'question-mark-circle';

	// List of available icons
	type IconType =
		| 'book-open'
		| 'check'
		| 'home'
		| 'lock-closed'
		| 'question-mark-circle'
		| 'sparkles'
		| 'squares-2x2'
		| 'users'
		| 'x-mark'
		| 'eye'
		| 'link';

	// Icons Paths
	let paths: path[];
	$: paths = icons[name].paths || [];

	interface path {
		fillRule?: string;
		clipRule?: string;
		d: string;
	}
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="currentColor"
	class="icon"
	{...$$props}
>
	{#each paths as { d, fillRule, clipRule }}
		<path {d} fill-rule={fillRule} clip-rule={clipRule} />
	{/each}
</svg>

<style>
	.icon {
		width: 1rem;
		height: 1rem;
	}
</style>
