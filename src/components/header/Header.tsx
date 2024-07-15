import React, {Dispatch, SetStateAction, useContext} from "react";
import {
	HeaderContainer,
	HeaderNav,
	NavContainer,
	NavMenu,
	NavItem,
	NavLink, MobileNavMenuIcon, MobileNavMenu, MobileNavItem, MobileList
} from "./HeaderElements";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {MobileContext} from "../../MobileContext";

export const Header: React.FC<{
	isSinglePage: boolean;
	setIsSinglePage: Dispatch<SetStateAction<any>>;
}> = ({ isSinglePage, setIsSinglePage }) => {
	const isMobile = useContext(MobileContext);

	const homeLink = {link: '/', name: 'Home', divId: 'home'};
	const experienceLink = {link: '/#/experience', name: 'Experience', divId: 'experience'};
	const skillsLink = {link: '/#/skills', name: 'Skills', divId: 'skills'};
	const aboutLink = {link: '/#/about', name: 'About Me', divId: 'about'};
	const contactLink = {link: '/#/contact', name: 'Contact', divId: 'contact'};
	const links = [homeLink, experienceLink, skillsLink, aboutLink, contactLink];

	function handleHeaderLinkClick(event: React.MouseEvent<HTMLAnchorElement>, link: { link: string; name?: string; divId: string; }) {
		event.preventDefault();

		if (isSinglePage) {
			document.getElementById(link.divId)?.scrollIntoView({block: "start", behavior: "smooth"});
		} else {
			window.location.href = link.link;
		}
	}

	function toggleSinglePage(event: React.MouseEvent<HTMLAnchorElement>) {
		event.preventDefault();
		const toggle = document.getElementById("singlePageToggle") as HTMLAnchorElement;

		if (isSinglePage) {
			setIsSinglePage(false);
			toggle.className = "single-page-link mb-2";
		} else {
			setIsSinglePage(true);
			toggle.className = "single-page-link mb-2 italic";
			window.location.hash = "";
		}
	}

	function handleMobileMenu() {
		const mobileNav = document.getElementById("mobileNav") as HTMLDivElement;
		if (mobileNav.style.display === "block") {
			mobileNav.style.display = "none";
		} else {
			mobileNav.style.display = "block";
		}
	}

	return (
		<HeaderContainer id={"header"}>
			<HeaderNav>
				<NavContainer>
					{isMobile ?
						<>
							<MobileNavMenuIcon id={"mobileNavIcon"} onClick={handleMobileMenu}>
								<FontAwesomeIcon icon={faBars}/>
								<MobileNavMenu id={"mobileNav"}>
									<MobileList>
										<a id={"singlePageToggle"} className={"single-page-link mb-2"} href={"/#"}
										   onClick={(event) => toggleSinglePage(event)}>
											{isSinglePage ? "Single Page Enabled" : "Toggle Single Page"}
										</a>
										{links.map(link =>
											<MobileNavItem key={link.name} className={'mb-1'}>
												<NavLink onClick={(event) => handleHeaderLinkClick(event, link)}>
													{link.name}
												</NavLink>
											</MobileNavItem>
										)}
									</MobileList>
								</MobileNavMenu>
							</MobileNavMenuIcon>
						</> :
						<>
							<NavMenu>
								{links.map(link => <NavItem key={link.name}>
										<NavLink onClick={(event) => handleHeaderLinkClick(event, link)}>
											{link.name}
										</NavLink>
									</NavItem>
								)}
							</NavMenu>
							<a id={"singlePageToggle"} className={"single-page-link"} href={"/#"}
							   onClick={(event) => {
								   toggleSinglePage(event);
							   }}>
								{isSinglePage ? "Single Page Enabled" : "Toggle Single Page"}
							</a>
						</>
					}
				</NavContainer>
			</HeaderNav>
		</HeaderContainer>
	);
}
