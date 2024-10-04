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
import { getPageTitle, logPageView } from "../../GA";

export function Layout() {
	const [isSinglePage, setIsSinglePage] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const title = getPageTitle(location.pathname);
		logPageView(location.pathname, title);
	}, [location.pathname]);

	return (
		<LayoutContainer>
			<Header
				isSinglePage={isSinglePage}
				setIsSinglePage={setIsSinglePage}
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
						<Outlet/>
					</PageContent>
				}
			</PageContainer>
			<Footer />
		</LayoutContainer>
	);
}
