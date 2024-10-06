import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { LayoutContainer, PageContainer, PageContent } from "./LayoutElements";
import React, { useEffect, useState } from "react";
import { Home } from "../home/Home";
import { Experience } from "../experience/Experience";
import { Skills } from "../skills/Skills";
import { Contact } from "../contact/Contact";
import { About } from "../about/About";
import { logPageView } from "../../GA";

export function Layout() {
	const [isSinglePage, setIsSinglePage] = useState(false);
	const [activePage, setActivePage] = useState('Home');

	useEffect(() => {
		logPageView('', activePage);
	}, [activePage]);

	const pages = [
		{ name: 'Home', component: <Home /> },
		{ name: 'Experience', component: <Experience /> },
		{ name: 'Skills', component: <Skills /> },
		{ name: 'About Me', component: <About /> },
		{ name: 'Contact', component: <Contact /> },
	];

	return (
		<LayoutContainer>
			<Header
				isSinglePage={isSinglePage}
				setIsSinglePage={setIsSinglePage}
				setActivePage={setActivePage}
			/>
			<PageContainer>
				{isSinglePage ?
					pages.map((page, index) => (
						<PageContent key={index}>
							{page.component}
						</PageContent>
					))
					:
					<PageContent>
						{pages.find(page => page.name === activePage)?.component}
					</PageContent>
				}
			</PageContainer>
			<Footer />
		</LayoutContainer>
	);
}
