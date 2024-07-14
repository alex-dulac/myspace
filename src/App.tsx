import React, {useEffect, useState} from 'react';
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import './styles/styles.css';
import {MobileContext} from "./MobileContext";


function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 786);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
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
