module.exports = {
	content: ['./src/**/*.svelte', './src/**/*.html'],
	theme: {
		extend: {
			colors: {
				primary: {
					default: '#146356',
					light: '#3B5249',
					'ex-light': '#e5eeec',
					bg: '#1F4541'
				},
				secondary: {
					default: '#A3DA8D',
					text: '#E4FCF8'
				},
				bg: {
					light: '#F5F6FF',
					dark: '#10332E'
				}
			},
			boxShadow: {
				input: 'inset 0 0 0 0.125em #146356',
				'input-checked': 'inset 0 0 0 0.4378em #146356'
			}
		},
		plugins: []
	}
};
