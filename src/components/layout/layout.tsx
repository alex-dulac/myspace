import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { LayoutContainer } from "./layout-elements";

export function Layout() {
	return (
		<LayoutContainer>
			<Header />
			<Outlet />
		</LayoutContainer>
	);
}
