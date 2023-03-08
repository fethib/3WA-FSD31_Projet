<script>
	import Badge from '$components/Badge.svelte';
</script>

<div
	class="px-4 py-4 transition-all rounded-md bg-card dark:bg-card-dark text-font-secondary dark:text-font-darkPrimary hover:bg-card-hover hover:dark:bg-card-darkHover hover:text-font-primary hover:dark:text-font-darkPrimary hover: cursor-pointer w-64 h-48 flex flex-col gap-1"
>
	<div class="flex items-center gap-2">
		<span class="text-xl flex-grow text-font-secondary dark:text-font-darkSecondary">1.</span>
	</div>

	<slot>
		Au Japon, vous devez obtenir le consentement de votre voiture avant de pouvoir y entrer.
	</slot>
</div>
