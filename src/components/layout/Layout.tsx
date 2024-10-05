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

	return (
		<LayoutContainer>
			<Header
				isSinglePage={isSinglePage}
				setIsSinglePage={setIsSinglePage}
				setActivePage={setActivePage}
			/>
			<PageContainer>
				{isSinglePage ?
					<>
						<PageContent>
							<Home/>
						</PageContent>
						<PageContent>
							<Experience/>
						</PageContent>
						<PageContent>
							<Skills/>
						</PageContent>
						<PageContent>
							<About/>
						</PageContent>
						<PageContent>
							<Contact/>
						</PageContent>
					</>
					:
					<PageContent>
						{activePage === 'Home' && <Home/>}
						{activePage === 'Experience' && <Experience/>}
						{activePage === 'Skills' && <Skills/>}
						{activePage === 'About Me' && <About/>}
						{activePage === 'Contact' && <Contact/>}
					</PageContent>
				}
			</PageContainer>
			<Footer />
		</LayoutContainer>
	);
}
