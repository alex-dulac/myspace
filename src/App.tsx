import { useEffect, useState } from 'react';
import { GlobalStyle } from "@styles/global";
import { ThemeProvider } from "styled-components";
import { MOBILE_WIDTH, MobileContext } from "@library/MobileContext";
import { defaultTheme } from "@styles/theme";
import { initGA } from "@library/ga";
import { Layout } from "@components/Layout";
import { hasExtraPath } from "@library/utils";

function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_WIDTH);

	useEffect(() => {
		const handleResize = () => {
			return window.innerWidth < MOBILE_WIDTH ? setIsMobile(true) : setIsMobile(false);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

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
				<Layout />
			</MobileContext.Provider>
			<GlobalStyle/>
		</ThemeProvider>
	);
}

export default App;
