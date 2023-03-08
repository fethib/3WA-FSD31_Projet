import type { PageServerLoad } from './$types';
import { z } from 'zod';
import { fail, redirect } from '@sveltejs/kit';
import { io } from 'socket.io-client';

//* Themes of the quiz
const themes: Array<string> = [];

// Fetch the themes from the API
const fetchThemes = async () => {
	const response = await fetch('http://localhost:3333/api/themes');
	const data = await response.json();
	return data;
};

fetchThemes().then((data) => {
	// Add the themes from the API to the themes array
	data.forEach((theme: string) => {
		themes.push(theme);
	});
});

//* Load function
export const load = (async () => {
	// return the themes order by name
	return { themes: themes.sort((a, b) => a.name.localeCompare(b.name)) };
}) satisfies PageServerLoad;

//* FORM HANDLING
/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		// Get form data
		const data = await request.formData();

		// Validation Rules
		const passwordSchema = z
			.string()
			.trim()
			.min(4, 'Le mot de passe doit contenir au moins 4 caractères.')
			.max(8, 'Le mot de passe ne peut pas contenir plus de 8 caractères.')
			.regex(
				new RegExp('^[A-Za-z0-9]+$'),
				'Le mot de passe ne peut contenir que des lettres et des chiffres.'
			);

		const themeSchema = z.enum([
			'sciences',
			'geographie',
			'histoire',
			'cinema',
			'musique',
			'sport',
			'jeux-video',
			'animaux',
			'divers',
			'espace',
			'culture-generale',
			'art'
		]);

		// Themes
		const themes: string[] = [];
		for (const [name, value] of data.entries()) {
			if (name.startsWith('theme_') && value === 'on') {
				themes.push(name.substring(6));
			}
		}

		// Password Protected
		const isPasswordProtected = data.get('enablePassword');
		const password = passwordSchema.safeParse(data.get('password'));

		//* Theme Validation
		//? Validate each theme
		themes.forEach((theme, index) => {
			const parsedTheme = themeSchema.safeParse(theme);

			// If a theme is sent and doesn't exist, don't use it
			if (!parsedTheme.success) {
				themes.splice(index, 1);
			}

			// If a theme is sent twice, use it only once
			if (themes.indexOf(theme) !== index) {
				themes.splice(index, 1);
			}
		});

		//? If no theme is selected, return an error
		if (themes.length === 0) {
			return fail(400, {
				isLoading: false,
				error: 'Veuillez sélectionner au moins un thème existant.',
				themes: {
					error: true,
					message: 'Veuillez sélectionner au moins un thème existant.'
				}
			});
		}

		//* Password Validation
		// If the password is required, validate it
		if (isPasswordProtected) {
			if (!password.success) {
				return fail(400, {
					isLoading: false,
					error: 'Veuillez renseigner un mot de passe valide.',
					password: {
						error: true,
						message: password.error.issues[0].message
					}
				});
			}
		}

		//* Create the room with Socket.io
		const socket = io('http://localhost:3051');
		socket.on('connect', () => {
			socket.emit('createRoom', {
				themes,
				isPasswordProtected,
				password: isPasswordProtected ? password.data : null
			});
		});

		//* When the room has been created, return a response to redirect the user
		const promise = new Promise((resolve) => {
			socket.on('roomCreated', (roomId) => {
				resolve(roomId);
			});

			// If after 10 seconds, the room hasn't been created, return an error
			setTimeout(() => {
				resolve(null);
			}, 10000);
		});

		const roomId = await promise;

		if (roomId) {
			throw redirect(303, `/play/${roomId}`);
		} else {
			return fail(500, {
				isLoading: false,
				error: 'Une erreur est survenue lors de la création de la partie.'
			});
		}
	}
};
