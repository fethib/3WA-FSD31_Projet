<script>
	import Heading from '$components/Heading.svelte';
	import Button from '$components/Button.svelte';
	import Icon from '$components/Icon.svelte';

	// Function to copy the current URL to the clipboard
	const copyToClipboard = () => {
		const url = window.location.href;
		navigator.clipboard.writeText(url);
	};
</script>

<div class="flex flex-col flex-grow items-start justify-start max-w-4xl m-auto gap-6 mt-20">
	<Heading level={1}>Installez-vous confortablement, la partie va bientôt commencer...</Heading>

	<div class="max-w-4xl flex flex-col gap-4">
		<div class="flex items-center gap-2 text-font-secondary dark:text-font-darkSecondary">
			<span>
				Votre pseudo est :
				<strong class="text-font-primary dark:text-font-darkPrimary"> Execko</strong>.
			</span>
			<span>
				Vous êtes <strong class="text-font-primary dark:text-font-darkPrimary">spectateur</strong>.
			</span>
		</div>

		<div class="flex items-center gap-2 flex-wrap">
			<Button>Changer de pseudo</Button>
			<Button>Rejoindre l'équipe Kebab</Button>
			<Button>Rejoindre l'équipe Durum</Button>
		</div>
	</div>

	<div class="max-w-4xl flex flex-col gap-4">
		<span class="text-font-secondary dark:text-font-darkSecondary">
			Au moins 1 joueur par équipe est nécessaire pour démarrer la partie.
		</span>

		<div class="flex items-center gap-2 flex-wrap">
			<Button on:click={copyToClipboard}><Icon name="link" /> Copier le lien d'invitation</Button>
			<Button disabled>Seul l'hôte peut démarrer la partie.</Button>
		</div>
	</div>
</div>
