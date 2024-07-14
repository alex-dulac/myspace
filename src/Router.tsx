import React, {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./components/home/Home";
import { Experience } from "./components/experience/Experience";
import { Skills } from "./components/skills/Skills";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route path="/" element={<Home/>}/>
				<Route path="/home" element={<Home/>}/>
				<Route path="/experience" element={<Experience/>}/>
				<Route path="/skills" element={<Skills/>}/>
				<Route path="/interests" element={<About/>}/>
				<Route path="/contact" element={<Contact/>}/>
				<Route path="/*" element={<Home/>}/>
			</Route>
		</Routes>
	);
}
