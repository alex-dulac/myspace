import { useEffect } from 'react';
import { GlobalStyle } from "@styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@styles/theme";
import { initGA } from "@library/ga";
import { Layout } from "@components/Layout/Layout.tsx";
import { hasExtraPath } from "@library/utils";
import { useIsMobile, MobileContext } from "@hooks/useIsMobile.ts";

function App() {
	const isMobile = useIsMobile();

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
			<MobileContext.Provider value={isMobile}>
				<Layout/>
			</MobileContext.Provider>
			<GlobalStyle/>
		</ThemeProvider>
	);
}

export default App;
