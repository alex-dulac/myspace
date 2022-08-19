import React from "react";
import {
	HeaderContainer,
	HeaderNav,
	NavContainer,
	NavMenu,
	NavItem,
	NavLink
} from "../header/header-elements";

export function Footer() {
	return (
		<HeaderContainer>
			<HeaderNav>
				<NavContainer>
					<NavMenu>
						<NavItem>
							<NavLink href="mailto:alex@alexdulac.dev">
								Email
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.linkedin.com/in/alexdulac/">
								LinkedIn
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/alex-dulac">
								Github
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.last.fm/user/alexdulac">
								LastFm
							</NavLink>
						</NavItem>
					</NavMenu>
				</NavContainer>
			</HeaderNav>
		</HeaderContainer>
	);
}
