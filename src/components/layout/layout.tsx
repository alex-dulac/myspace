import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { LayoutContainer } from "./layout-elements";
import { PageContainer, PageContent } from "../../styles/style-elements";
import React, { useState } from "react";
import { Home } from "../home/home";
import { Experience } from "../experience/experience";
import { Skills } from "../skills/skills";
import { Contact } from "../contact/contact";
import { Interests } from "../interests/interests";

export function Layout() {
	const [isSinglePage, setIsSinglePage] = useState(false);

	return (
		<LayoutContainer>
			<Header
				isSinglePage={isSinglePage}
				setIsSinglePage={setIsSinglePage}
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
