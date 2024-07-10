import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Home } from "./components/home/home";
import { Experience } from "./components/experience/experience";
import { Skills } from "./components/skills/skills";
import { Interests } from "./components/interests/interests";
import { Contact } from "./components/contact/contact";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route path="/" element={<Home/>}/>
				<Route path="/home" element={<Home/>}/>
				<Route path="/experience" element={<Experience/>}/>
				<Route path="/skills" element={<Skills/>}/>
				<Route path="/interests" element={<Interests/>}/>
				<Route path="/contact" element={<Contact/>}/>
				<Route path="/*" element={<Home/>}/>
			</Route>
		</Routes>
	);
}
