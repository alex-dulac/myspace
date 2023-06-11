import React from "react";
import {
	HeaderContainer,
	HeaderNav,
	NavContainer,
	NavMenu,
	NavItem,
	NavLink, MobileNavMenuIcon, MobileNavMenu, MobileNavItem, MobileList
} from "./header-elements";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

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
							<NavLink href="/#/experience">
								Experience
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/#/skills">
								Skills
							</NavLink>
						</NavItem>
						{/*<NavItem>
							<NavLink href="/interests">
								Interests
							</NavLink>
						</NavItem>*/}
						<NavItem>
							<NavLink href="/#/contact">
								Contact
							</NavLink>
						</NavItem>
					</NavMenu>
					<MobileNavMenuIcon id={"mobileNavIcon"} onClick={handleMobileMenu}>
						<FontAwesomeIcon icon={faBars}/>
						<MobileNavMenu id={"mobileNav"}>
							<MobileList>
								<MobileNavItem className={'mb-1'}>
									<NavLink href="/">
										Home
									</NavLink>
								</MobileNavItem>
								<MobileNavItem className={'mb-1'}>
									<NavLink href="/#/experience">
										Experience
									</NavLink>
								</MobileNavItem>
								<MobileNavItem className={'mb-1'}>
									<NavLink href="/#/skills">
										Skills
									</NavLink>
								</MobileNavItem>
								{/*<MobileNavItem>
							<NavLink href="/interests">
								Interests
							</MobileNavItem>
						</NavItem>*/}
								<MobileNavItem className={'mb-1'}>
									<NavLink href="/#/contact">
										Contact
									</NavLink>
								</MobileNavItem>
							</MobileList>
						</MobileNavMenu>
					</MobileNavMenuIcon>
				</NavContainer>
			</HeaderNav>
		</HeaderContainer>
	);
}

function handleMobileMenu() {
	const mobileNav = document.getElementById("mobileNav") as HTMLDivElement;
	if (mobileNav.style.display === "block") {
		mobileNav.style.display = "none";
	} else {
		mobileNav.style.display = "block";
	}
}
