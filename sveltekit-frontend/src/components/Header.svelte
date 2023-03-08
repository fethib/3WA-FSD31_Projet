<script lang="ts">
	import Breadcrumb from '$components/Breadcrumb.svelte';
	import Button from '$components/Button.svelte';
	import Icon from '$components/Icon.svelte';
	import Paragraph from '$components/Paragraph.svelte';
	import Dialog from '$components/Dialog.svelte';

	let isShowingRules: boolean;
	let isLeaving: boolean;
</script>

<header
	class="flex sticky items-center w-full justify-between gap-3 p-3 text-sm border rounded-md border-stroke dark:border-stroke-dark bg-card dark:bg-card-dark"
>
	<Breadcrumb />

	<div class="flex items-center gap-2">
		<Button on:click={() => (isShowingRules = !isShowingRules)}>
			<Icon name="book-open" /> Règles du jeu
		</Button>
		<Button on:click={() => (isLeaving = !isLeaving)}>Quitter la partie</Button>
	</div>
</header>

{#if isShowingRules}
	<Dialog handleClose={() => (isShowingRules = false)}>
		<svelte:fragment slot="title">Règles du jeu</svelte:fragment>

		<svelte:fragment slot="content">
			<Paragraph>
				Deux équipes de 1 à 3 joueurs s'affrontent pour marquer le plus de points possible.
			</Paragraph>

			<Paragraph>10 questions seront posées, les unes après les autres.</Paragraph>

			<Paragraph>A chaque question, 3 choix de réponses s'offrent à vous.</Paragraph>

			<Paragraph>
				La réponse sélectionnée par la majorité des joueurs de votre équipe sera validée à la fin du
				compte à rebours.
			</Paragraph>

			<Paragraph>
				Si aucune proposition n'a reçu la majorité des votes, une proposition aléatoire sera validée
				parmi celles qui ont été sélectionnées par les joueurs de l'équipe.
			</Paragraph>

			<Paragraph>Chaque bonne réponse rapporte 1 point à l'équipe.</Paragraph>
		</svelte:fragment>

		<svelte:fragment slot="buttons">
			<Button on:click={() => (isShowingRules = false)}>Fermer</Button>
		</svelte:fragment>
	</Dialog>
{/if}

{#if isLeaving}
	<Dialog handleClose={() => (isLeaving = false)}>
		<svelte:fragment slot="title">Quitter la partie ?</svelte:fragment>

		<svelte:fragment slot="content">
			<Paragraph>Si vous quittez la partie, vous ne pourrez plus la rejoindre à nouveau.</Paragraph>

			<Paragraph>
				Votre équipe se retrouvera avec un joueur en moins et vos coéquipiers vous en voudront
				probablement.
			</Paragraph>

			<Paragraph>Vous allez également finir en Enfer.</Paragraph>
		</svelte:fragment>

		<svelte:fragment slot="buttons">
			<Button on:click={() => (isLeaving = false)}>Finalement, je veux rester.</Button>
			<Button>Oui, je veux partir.</Button>
		</svelte:fragment>
	</Dialog>
{/if}
