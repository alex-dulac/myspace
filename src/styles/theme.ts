import 'styled-components';

export const defaultTheme = {
	colors: {
		primary: '#90C2E7',
		secondary: '#4E8098',
		tertiary: '#00A9A5',
		textPrimary: '#092327',
		textSecondary: '#0b5351',
		error: '#dc2626',
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
	},
	spacing: {
		xsmall: '0.5rem',
		small: '1rem',
		medium: '2rem',
		large: '3rem',
		xlarge: '4rem',
		xxlarge: '5rem',
	}
} as const;

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {
	}
}
