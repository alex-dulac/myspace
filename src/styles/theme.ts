import 'styled-components';

export const defaultTheme = {
	//'primary': '#DCE1DE',
	//'secondary': '#9CC5A1',
	//'tertiary': '#49A078',
	//'text': '#1F2421',
	//'panel-background': '#FDF6F6',
	//'navy-text': '#043b59',

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
