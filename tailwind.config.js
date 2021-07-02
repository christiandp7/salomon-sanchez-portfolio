module.exports = {
	mode: 'jit',
	future: {
		purgeLayersByDefault: true,
		applyComplexClasses: true,
	},
	purge: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				gilroy: ['"Gilroy"', 'sans-serif'],
			},
			colors: {
				salomonFuschia: {
					500: '#fa00ff',
					600: '#cc00ff',
				},
				salomonCyan: '#00bae2',
				salomonGray: '#636363',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
