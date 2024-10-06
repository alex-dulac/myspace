import React, { useEffect, useState } from "react";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { Home } from "@components/Home";
import { Experience } from "@components/Experience";
import { Skills } from "@components/Skills";
import { Contact } from "@components/Contact";
import { logPageView } from "@utils/ga";
import { About } from "@components/About";
import { LayoutContainer, PageContainer, PageContent } from "@elements/Elements";

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
