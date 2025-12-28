import 'styled-components';

export const defaultTheme = {
	colors: {
		primary: '#90C2E7',
		secondary: '#4E8098',
		tertiary: '#00A9A5',
		quaternary: '#0b5351',
		quinary: '#092327',
	},
	fonts: {
		main: "'Inter', sans-serif",
		headings: "'Montserrat', sans-serif",
	},
	fontSizes: {
		small: '0.875rem',
		medium: '1rem',
		large: '1.125rem',
		xlarge: '1.25rem',
	}
} as const;

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType { }
}
