<script>
	import { page } from '$app/stores';
	import { io } from 'socket.io-client';

	// Components
	import Scoreboard from '$components/Scoreboard.svelte';

	// Game screens
	import LobbyScreen from './(screens)/LobbyScreen.svelte';
	import { onMount } from 'svelte';

	// Get the roomId from the last part of the URL
	const roomId = $page.params.roomId;

	// Connect to the socket.io server and join the room
	const socket = io('http://localhost:3051');
	socket.emit('joinRoom', roomId);

	// Disconnect from the socket.io server when the component is destroyed or the page is left
	onMount(() => {
		return () => {
			socket.disconnect();
		};
	});
</script>

<div class="flex-grow flex flex-col gap-4 w-full">
	<Scoreboard />
	<LobbyScreen />
</div>
