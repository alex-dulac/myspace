import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Global } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { Router } from "./library/router";


function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Router/>
			</BrowserRouter>
			<Global/>
		</ThemeProvider>
	);
}

export default App;
