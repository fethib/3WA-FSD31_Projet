<script>
	import '../app.css';
	import Header from '$components/Header.svelte';
</script>

<div
	class="relative flex flex-col items-center min-h-screen gap-4 p-4 font-medium bg-page text-font-primary dark:text-font-darkPrimary dark:bg-page-dark font-body"
>
	<Header />

	<div class="w-full flex-grow flex-col flex items-center justify-center">
		<slot />
	</div>
</div>
