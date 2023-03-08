<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { enhance } from '$app/forms';

	// Components
	import Heading from '$components/Heading.svelte';
	import Paragraph from '$components/Paragraph.svelte';
	import Button from '$components/Button.svelte';
	import Icon from '$components/Icon.svelte';
	import Checkbox from '$components/inputs/Checkbox.svelte';
	import CheckboxWrapper from '$components/inputs/CheckboxWrapper.svelte';
	import TextAndPasswordInput from '$components/inputs/TextAndPasswordInput.svelte';
	import StatusMessage from '$components/StatusMessage.svelte';

	// Data
	export let data: PageData;
	export let form: ActionData;

	// Variables
	let isPasswordProtected: boolean = false;
	let password: string = '';
	$: isLoading = form?.isLoading;

	// Functions
	const setLoading = () => {
		setTimeout(() => {
			if (!form) isLoading = true;
		}, 3000);
	};
</script>

<form method="POST" use:enhance>
	<div class="flex flex-col items-start max-w-xl gap-8">
		<div class="flex flex-col gap-2">
			<Heading level={1}>Créer une nouvelle partie</Heading>

			<Paragraph>
				Une fois la partie créée, vous serez déplacé dans un lobby depuis lequel vous pourrez
				inviter d'autre joueurs.
			</Paragraph>
		</div>

		<!-- THEMES -->

		<div class="flex flex-col gap-2">
			<div class="flex items-center gap-1 text-sm text-font-primary dark:text-font-darkPrimary">
				<Icon name="squares-2x2" />
				<span>Thèmes</span>
			</div>

			<p class="max-w-md text-sm text-font-secondary dark:text-font-darkSecondary">
				Choisissez les thèmes des questions qui pourront êtres posées.
			</p>

			<div class="flex flex-wrap items-center justify-start gap-2">
				{#each data.themes as { id, name, emoji }}
					<CheckboxWrapper>
						<Checkbox inputName={`theme_${id}`} {emoji} isChecked={true}>
							{name}
						</Checkbox>
					</CheckboxWrapper>
				{/each}
			</div>

			{#if form?.themes?.error}
				<StatusMessage type="error">{form.themes.message}</StatusMessage>
			{/if}
		</div>

		<!-- PASSWORD -->
		<div class="flex flex-col max-w-md gap-2">
			<div class="flex items-center gap-1 text-sm text-font-primary dark:text-font-darkPrimary">
				<Icon name="lock-closed" />
				<span>Mot de passe <i class="text-xs font-light">(Facultatif)</i></span>
			</div>

			<p class="max-w-md text-sm text-font-secondary dark:text-font-darkSecondary">
				Un mot de passe peut être demandé à tout les joueurs souhaitant rejoindre votre partie.
			</p>

			<Checkbox inputName="enablePassword" bind:isChecked={isPasswordProtected}>
				Protéger la partie avec un mot de passe ?
			</Checkbox>

			{#if isPasswordProtected}
				<TextAndPasswordInput
					type="password"
					name="password"
					rules={{ minLength: 4, maxLength: 8 }}
					hasErrors={form?.password?.error}
					message={form?.password?.message}
					bind:value={password}
					autofocus
				>
					Mot de passe
				</TextAndPasswordInput>
			{/if}
		</div>

		<!-- SUBMIT -->
		<div class="flex flex-wrap items-center grid-cols-1 gap-4">
			<Button
				type="submit"
				on:click={setLoading}
				disabled={isPasswordProtected && password.length < 4}
			>
				Créer la partie
			</Button>

			{#if isLoading}
				<StatusMessage type="loading">Chargement...</StatusMessage>
			{/if}

			{#if form?.error}
				<StatusMessage type="error">{form.error}</StatusMessage>
			{/if}
		</div>
	</div>

	{#if form?.success}
		<p>Form success : {form.success}</p>
	{/if}
</form>
