module.exports = {
	content: ['./src/**/*.svelte', './src/**/*.html'],
	theme: {
		extend: {
			colors: {
				primary: {
					default: '#146356',
					light: '#3B5249',
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
			}
		},
		plugins: []
	}
};
