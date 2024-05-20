/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		fontSize: {
			xs: '0.5rem',
			sm: '0.6rem',
			base: '0.8rem',
			xl: '1rem',
			'2xl': '1.250',
			'3xl': '1.500rem',
			'4xl': '1.750.441rem',
			'5xl': '2rem',
		},
	},
	safelist: [
		'col-span-1',
		'col-span-5',
		'col-span-6',
		'grid-cols-11',
		'grid-cols-12',
	],
	plugins: [],
};
