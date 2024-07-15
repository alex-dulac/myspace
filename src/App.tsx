import React, {useEffect, useState} from 'react';
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { MobileContext } from "./MobileContext";
import { defaultTheme } from "./styles/theme";

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

	return (
		<ThemeProvider theme={defaultTheme}>
			<HashRouter>
				<MobileContext.Provider value={isMobile}>
					<Router/>
				</MobileContext.Provider>
			</HashRouter>
			<GlobalStyle/>
		</ThemeProvider>
	);
}

export default App;
