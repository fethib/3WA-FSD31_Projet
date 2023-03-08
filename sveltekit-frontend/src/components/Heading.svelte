<script lang="ts">
	export let level: 1 | 2 | 3 | 4 | 5 | 6 = 2;
</script>

<svelte:element
	this={`h${level}`}
	class="font-display"
	class:text-4xl={level === 1}
	class:font-normal={level === 1}
	class:tracking-tighter={level === 1}
	class:text-2xl={level === 2}
	class:text-xl={level === 3}
	class:text-lg={level === 4}
	class:text-base={level === 5}
	class:text-sm={level === 6}
	class:font-bold={level === 6}
	class:uppercase={level === 6}
	{...$$restProps}
>
	<slot>Titre de niveau {level}</slot>
</svelte:element>
