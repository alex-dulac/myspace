import { useEffect } from 'react';
import { GlobalStyle } from "@styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@styles/theme";
import { initGA } from "@library/ga";
import { Layout } from "@components/Layout/Layout.tsx";
import { hasExtraPath } from "@library/utils";

function App() {
	useEffect(() => {
		if (import.meta.env.VITE_GA_ENABLED === 'true') {
			initGA();
		}

		if (hasExtraPath()) {
			window.location.href = window.location.origin;
		}
	}, []);

	return (
		<ThemeProvider theme={defaultTheme}>
			<Layout/>
			<GlobalStyle/>
		</ThemeProvider>
	);
}

export default App;
