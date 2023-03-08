<script lang="ts">
	export let isPlayer: boolean = false;
	export let isDisconnected: boolean = false;
</script>

<div
	class="bg-pill dark:bg-pill-dark flex gap-2 items-center justify-center h-8 overflow-hidden rounded-full text-sm border w-24 empty:bg-transparent empty:border-dashed empty:border-stroke dark:empty:border-stroke-dark empty:border-2 empty:border-opacity-20"
	class:border-accent-player={isPlayer}
	class:border-transparent={!isPlayer}
	class:opacity-20={isDisconnected}
>
	<slot />
</div>
