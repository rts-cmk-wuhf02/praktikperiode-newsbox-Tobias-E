module.exports = {
	theme: {
		extend: {
			zIndex: {
				'-10': '-10'
			},
			inset: {
				'-20': '-25%'
			},
			spacing: {
				'18': '4.5rem'
			},
			borderRadius: {
				'12px': '0.75rem'
			},
			fontSize: {
				'30px': '1.875rem',
				'20px': '1.25rem',
				'18px': '1.125rem',
				'15px': '0.9375rem',
				'14px': '0.875rem',
				'12px': '0.75rem'
			},
			colors: {
				primary: {
					sage: '#87BCBF',
					rust: '#D97D54',
					drab: '#324755',
					danger: '#D95454'
				},
				secondary: {
					ice: 'var(--ice)',
					fossil: '#C8D1D3',
					sand: '#B9B0A2'
				},
				typography: {
					onyx: 'var(--onyx)',
					slate: 'var(--slate)',
					snow: 'var(--snow)',
					pblue: '#6E8CA0',
					grey: 'var(--typography-grey)'
				},
				utility: {
					bordergrey: '#E0E1E2',
					inputgrey: '#F0F3F4',
					settingsbg: 'var(--settings-bg)',
					newsbg: 'var(--news-bg)'
				}
			}
		}
	},
	variants: {},
	plugins: []
};
