<script>
	export let teams = {
		teamA: {
			name: 'équipe kebab',
			score: 0,
			players: [
				{
					name: 'Execko',
					isPlayer: true
				},
				{
					name: 'Oxmozz'
				},
				{
					name: 'Skirn',
					isDisconnected: true
				}
			]
		},
		teamB: {
			name: 'équipe durum',
			score: 0,
			players: [
				{
					name: 'Seth'
				},
				{
					name: 'Sythrouille'
				}
			]
		}
	};

	// Components
	import Team from '$components/Team.svelte';
	import Timer from '$components/Timer.svelte';
	import Icon from '$components/Icon.svelte';
</script>

<div class="grid grid-cols-3 gap-8 grid-flow-cols auto-cols-min">
	<Team name={teams.teamA.name} players={teams.teamA.players} score={teams.teamA.score} />

	<div class="flex flex-col items-center justify-center gap-2">
		<Timer />
		<div class="text-font-secondary dark:text-font-darkSecondary text-sm flex items-center gap-2">
			<Icon name="eye" />
			<span>1 Spectateur</span>
		</div>
	</div>

	<Team name={teams.teamB.name} players={teams.teamB.players} score={teams.teamB.score} isRight />
</div>
