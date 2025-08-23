import 'styled-components';

export const defaultTheme = {
	'color-a': '#90C2E7',
	'color-b': '#4E8098',
	'color-c': '#00A9A5',
	'color-d': '#0b5351',
	'color-e': '#092327',
} as const;

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType { }
}
