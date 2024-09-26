import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { LayoutContainer, PageContainer, PageContent } from "./LayoutElements";
import React, { useEffect, useState } from "react";
import { Home } from "../home/Home";
import { Experience } from "../experience/Experience";
import { Skills } from "../skills/Skills";
import { Contact } from "../contact/Contact";
import { About } from "../about/About";
import { initGA, logPageView } from "../../Analytics";

export function Layout() {
	const [isSinglePage, setIsSinglePage] = useState(false);

	useEffect(() => {
		initGA();
	}, []);

	const location = useLocation();

	useEffect(() => {
		let title;
		switch (location.pathname) {
			case '/':
        title = "Home";
        break;
      case '/experience':
        title = "Experience";
        break;
      case '/skills':
        title = "Skills";
        break;
      case '/about':
        title = "About Me";
        break;
      case '/contact':
        title = "Contact";
        break;
      default:
        title = "Home";
        break;
		}
		logPageView(location.pathname, title);
	}, [location.pathname]);

	return (
		<LayoutContainer>
			<Header isSinglePage={isSinglePage} setIsSinglePage={setIsSinglePage}/>
			<PageContainer>
				{isSinglePage ?
					<>
						<PageContent><Home/></PageContent>
						<PageContent><Experience/></PageContent>
						<PageContent><Skills/></PageContent>
						<PageContent><About/></PageContent>
						<PageContent><Contact/></PageContent>
					</>
					: <PageContent><Outlet/></PageContent>
				}
			</PageContainer>
			<Footer />
		</LayoutContainer>
	);
}
