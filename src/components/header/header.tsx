import React from "react";
import {
	HeaderNav,
	HeaderContainer,
	HeaderMenu,
	HeaderItem,
	HeaderNavLink,
	HeaderTitle
} from "./header-elements";

export function Header() {
	return (
		<HeaderNav>
			<HeaderContainer>
				<HeaderMenu>
					<HeaderItem>
						<HeaderNavLink href="/">
							Home
						</HeaderNavLink>
					</HeaderItem>
					<HeaderItem>
						<HeaderNavLink href="/experience">
							Experience
						</HeaderNavLink>
					</HeaderItem>
					<HeaderItem>
						<HeaderNavLink href="/skills">
							Skills + Education
						</HeaderNavLink>
					</HeaderItem>
					<HeaderItem>
						<HeaderNavLink href="/interests">
							Interests
						</HeaderNavLink>
					</HeaderItem>
					<HeaderItem>
						<HeaderNavLink href="/contact">
							Contact
						</HeaderNavLink>
					</HeaderItem>
				</HeaderMenu>
				<HeaderTitle>ALEX DULAC</HeaderTitle>
			</HeaderContainer>
		</HeaderNav>
	);
}
