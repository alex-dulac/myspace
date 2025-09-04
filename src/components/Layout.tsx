import { type ReactElement, useMemo, useState } from "react";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { Home } from "@components/Home";
import { Experience } from "@components/Experience";
import { Skills } from "@components/Skills";
import { Contact } from "@components/Contact";
import { About } from "@components/About";
import { LayoutContainer, PageContainer, PageContent } from "@library/elements";

export interface Page {
	name: string;
	component: ReactElement;
	path: string;
	divId: string;
}

const home: Page = { name: 'Home', component: <Home />, path: '/', divId: 'home' };
const experience: Page = { name: 'Experience', component: <Experience />, path: '/experience', divId: 'experience' };
const skills: Page = { name: 'Skills', component: <Skills />, path: '/skills', divId: 'skills' };
const about: Page = { name: 'About Me', component: <About />, path: '/about', divId: 'about' };
const contact: Page = { name: 'Contact', component: <Contact />, path: '/contact', divId: 'contact' };
export const pages: Page[] = [home, experience, skills, about, contact];

export function Layout() {
	const [showAll, setShowAll] = useState(false);
	const [activePage, setActivePage] = useState<Page>(home);

	const allContent = useMemo(() => (
		pages.map((page, index) => (
			<PageContent key={index}>
				{page.component}
			</PageContent>
		))
	), []);

	const activePageContent = useMemo(() => (
		<PageContent>
			{pages.find(page => page.name === activePage.name)?.component}
		</PageContent>
	), [activePage]);

	return (
		<LayoutContainer>
			<Header
				showAll={showAll}
				setShowAll={setShowAll}
				activePage={activePage}
				setActivePage={setActivePage}
			/>
			<PageContainer>
				{showAll ? allContent : activePageContent}
			</PageContainer>
			<Footer />
		</LayoutContainer>
	);
}
