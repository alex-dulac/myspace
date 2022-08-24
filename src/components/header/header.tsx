import React from "react";
import {
	HeaderContainer,
	HeaderNav,
	NavContainer,
	NavMenu,
	NavItem,
	NavLink
} from "./header-elements";

export function Header() {
	return (
		<HeaderContainer>
			<HeaderNav>
				<NavContainer>
					<NavMenu>
						<NavItem>
							<NavLink href="/">
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/experience">
								Experience
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/skills">
								Skills + Education
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/interests">
								Interests
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/contact">
								Contact
							</NavLink>
						</NavItem>
					</NavMenu>
				</NavContainer>
			</HeaderNav>
		</HeaderContainer>
	);
}
