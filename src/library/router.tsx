import React from "react";
import { Route, Routes } from "react-router-dom";
import { BodyLayout } from "../components/body-layout";
import { Home } from "../components/home";
import { Experience } from "../components/experience";
import { Skills } from "../components/skills";
import { Interests } from "../components/interests";
import { Contact } from "../components/contact";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<BodyLayout/>}>
				<Route path="/" element={<Home/>}/>
				<Route path="/experience" element={<Experience/>}/>
				<Route path="/skills" element={<Skills/>}/>
				<Route path="/interests" element={<Interests/>}/>
				<Route path="/contact" element={<Contact/>}/>
				<Route path="/*" element={<Home/>}/>
			</Route>
		</Routes>
	);
}
