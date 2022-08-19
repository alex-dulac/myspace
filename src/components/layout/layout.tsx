import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { LayoutContainer } from "./layout-elements";

export function Layout() {
	return (
		<LayoutContainer>
			<Header />
			<Outlet />
			<Footer />
		</LayoutContainer>
	);
}
