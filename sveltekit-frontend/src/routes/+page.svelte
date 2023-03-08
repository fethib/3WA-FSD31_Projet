<script>
	import Heading from '$components/Heading.svelte';
	import Paragraph from '$components/Paragraph.svelte';
	import Icon from '$components/Icon.svelte';
	import Button from '$components/Button.svelte';

	const introductionTexts = [
		'Installez-vous confortablement et préparez-vous à répondre à des questions farfelues.',
		'Et sinon, ça va vous ?',
		"Aucun animal n'a été blessé pendant l'élaboration de ce jeu."
	];
</script>

<div class="flex flex-col items-start gap-4">
	<div class="flex flex-col gap-2">
		<Heading level={1}>Bienvenue au Kebab Quiz</Heading>

		<Paragraph>
			{introductionTexts[Math.floor(Math.random() * introductionTexts.length)]}
		</Paragraph>
	</div>

	<div class="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
		<Button href="/new"><Icon name="sparkles" /> Créer une partie</Button>
		<Button><Icon name="users" />Rejoindre une partie</Button>
	</div>
</div>
