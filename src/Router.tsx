import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Experience } from "./components/experience/Experience";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export function Router() {
	// Depreciated in favor of using activePage state
	return (
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route path="/" element={<Home/>}/>
				<Route path="/home" element={<Home/>}/>
				<Route path="/experience" element={<Experience/>}/>
				<Route path="/skills" element={<Skills/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/contact" element={<Contact/>}/>
				<Route path="/*" element={<Home/>}/>
			</Route>
		</Routes>
	);
}
