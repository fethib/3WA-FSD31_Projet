<script lang="ts">
	export let text: string = 'En attente de joueurs...';
	export let countdown: Number | null = null;
	export let timeLeft: Number = 0;

	// Used to animate the timer
	$: progress = countdown ? (timeLeft / countdown) * 100 : 0;
	const EMERGENCY_TIME = 10;
</script>

<div
	class="flex flex-col gap-2 rounded-md px-4 py-3 bg-card dark:bg-card-dark items-center justify-center relative place-self-center h-full max-w-[150px] overflow-hidden"
>
	<span class="uppercase text-sm text-font-secondary dark:text-font-darkSecondary text-center"
		>{text}</span
	>

	{#if countdown}
		<span>{countdown}</span>
	{/if}

	<div
		class="opacity-5 absolute h-full left-0 top-0 transition-all ease-in-out"
		class:bg-font-primary={timeLeft >= EMERGENCY_TIME + 1}
		class:dark:bg-font-darkPrimary={timeLeft >= EMERGENCY_TIME + 1}
		class:animate-pulse={timeLeft < EMERGENCY_TIME + 1}
		class:bg-red-500={timeLeft < EMERGENCY_TIME + 1}
		style:width="{progress}%"
	/>
</div>
