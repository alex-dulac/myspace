import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { LayoutContainer } from "./layout-elements";
import { PageContainer, PageContent } from "../../styles/style-elements";

export function Layout() {
	return (
		<LayoutContainer>
			<Header />
			<PageContainer>
				<PageContent>
					<Outlet />
				</PageContent>
			</PageContainer>
			<Footer />
		</LayoutContainer>
	);
}
