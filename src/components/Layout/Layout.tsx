import { type ReactElement, useContext, useMemo, useState } from "react";
import { Header } from "@components/Header/Header.tsx";
import { Footer } from "@components/Footer/Footer.tsx";
import { Home } from "@components/Home/Home.tsx";
import { Experience } from "@components/Experience/Experience.tsx";
import { Skills } from "@components/Skills/Skills.tsx";
import { Contact } from "@components/Contact/Contact.tsx";
import { About } from "@components/About/About.tsx";
import { MobileContext } from "@hooks/useIsMobile.ts";
import { Container, Content, LayoutContainer, PageContainer, PageContent } from "@components/Layout/styles.ts";

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
	const isMobile = useContext(MobileContext);
	const [showAll, setShowAll] = useState(isMobile);
	const [activePage, setActivePage] = useState<Page>(home);

	const allContent = useMemo(() => (
		pages.map((page, index) => (
			<PageContent key={index}>
				<Container id={page.divId}>
					<Content>
						{page.component}
					</Content>
				</Container>
			</PageContent>
		))
	), []);

	// important to note the key location here compared to allContent
	// forces remount so the fade-in animation triggers
	const activePageContent = useMemo(() => {
		const page = pages.find(page => page.name == activePage.name) || home;
		return (
			<PageContent>
				<Container key={page.name} id={page.divId}>
					<Content>
						{page.component}
					</Content>
				</Container>
			</PageContent>
		)
	}, [activePage]);

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
