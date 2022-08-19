import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { Router } from "./library/router";


function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Router/>
			</BrowserRouter>
			<GlobalStyle/>
		</ThemeProvider>
	);
}

export default App;
