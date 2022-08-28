import React from 'react';
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { Router } from "./library/router";
import './styles/styles.css';


function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<HashRouter>
				<Router/>
			</HashRouter>
			<GlobalStyle/>
		</ThemeProvider>
	);
}

export default App;
