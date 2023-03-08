/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			display: 'Poppins, Arial, sans-serif',
			body: '"DM Sans", Arial, sans-serif'
		},
		extend: {
			colors: {
				page: {
					DEFAULT: '#F4F4F4',
					dark: '#1B1B1B'
				},
				font: {
					primary: '#262626',
					secondary: '#828282',
					darkPrimary: '#E9E9E9',
					darkSecondary: '#828282'
				},
				stroke: {
					DEFAULT: '#EFEFEF',
					dark: '#373737'
				},
				button: {
					DEFAULT: '#E2E2E2',
					hover: '#E3E3E3',
					dark: '#3A3A3A',
					darkHover: '#4D4D4D'
				},
				card: {
					DEFAULT: '#FFFFFF',
					hover: '#FFFFFF',
					dark: '#262626',
					darkHover: '#3A3A3A'
				},
				pill: {
					DEFAULT: '#FFFFFF',
					dark: '#3A3A3A'
				},
				accent: {
					player: '#30B4FF',
					green: '#009740',
					red: '#FF0000',
					darkPlayer: '#30B4FF',
					darkGreen: '#00FF6D',
					darkRed: '#FF0000'
				}
			},
			boxShadow: {
				big: '0px 33px 80px rgba(0, 0, 0, 0.29), 0px 9.94853px 24.1177px rgba(0, 0, 0, 0.188961), 0px 4.13211px 10.0172px rgba(0, 0, 0, 0.145), 0px 1.4945px 3.62304px rgba(0, 0, 0, 0.101039)'
			}
		}
	},
	plugins: []
};
