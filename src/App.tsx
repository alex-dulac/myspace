import React, {useEffect, useState} from 'react';
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { MobileContext } from "./MobileContext";
import { defaultTheme } from "./styles/theme";
import { initGA } from "./GA";
import { Layout } from "./components/Layout";

const MOBILE_WIDTH: number = 786;

function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_WIDTH);

	useEffect(() => {
		const handleResize = () => {
			window.innerWidth < MOBILE_WIDTH ? setIsMobile(true) : setIsMobile(false);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		initGA();
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
