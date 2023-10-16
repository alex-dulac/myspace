import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { LayoutContainer } from "./layout-elements";
import { PageContainer, PageContent } from "../../styles/style-elements";
import React, { useEffect, useState } from "react";
import { Home } from "../home/home";
import { Experience } from "../experience/experience";
import { Skills } from "../skills/skills";
import { Contact } from "../contact/contact";
import { Interests } from "../interests/interests";

export function Layout() {
	const [isSinglePage, setIsSinglePage] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 786); //@TODO remove mobile screen validation from CSS and use react state instead

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<LayoutContainer>
			<Header
				isSinglePage={isSinglePage}
				setIsSinglePage={setIsSinglePage}
				isMobile={isMobile}
			/>
			<PageContainer>
				{isSinglePage ?
					<>
						<PageContent><Home/></PageContent>
						<PageContent><Experience/></PageContent>
						<PageContent><Skills/></PageContent>
						<PageContent><Interests/></PageContent>
						<PageContent><Contact/></PageContent>
					</> :
					<PageContent><Outlet/></PageContent>
				}
			</PageContainer>
			<Footer />
		</LayoutContainer>
	);
}
