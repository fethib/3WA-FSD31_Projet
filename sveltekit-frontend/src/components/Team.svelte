<script lang="ts">
	export let name: string = "nom de l'équipe";
	export let players: Array<{
		name: string;
		isPlayer?: boolean;
		isDisconnected?: boolean;
	}> = [];
	export let score: number = 0;
	export let isRight: boolean = false;

	import PlayerTag from '$components/PlayerTag.svelte';

	// Create an array of 3 players seats populated with the players received as props
	// If a seat is empty, it will be undefined and rendered with a dashed border
	$: playersSeats = [players[0], players[1], players[2]];
</script>

<div class="flex flex-col gap-2" class:ml-auto={isRight}>
	<span
		class="flex items-center gap-3 uppercase text-xs text-font-secondary dark:text-font-darkSecondary"
		class:ml-auto={isRight}
	>
		<span class="order-2"> {name} </span>
		<span class="text-font-primary dark:text-font-darkPrimary order-3" class:order-1={isRight}>
			{score} PTS
		</span>
	</span>
	<div class="flex gap-3 flex-wrap">
		{#each playersSeats as player}
			{#if player}
				<PlayerTag isPlayer={player.isPlayer} isDisconnected={player.isDisconnected}>
					{player.name}
				</PlayerTag>
			{:else}
				<PlayerTag />
			{/if}
		{/each}
	</div>
</div>
