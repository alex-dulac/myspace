import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { LayoutContainer } from "../styles/style-elements";

export function BodyLayout() {
	return (
		<LayoutContainer>
			<Header />
			<Outlet />
		</LayoutContainer>
	);
}
