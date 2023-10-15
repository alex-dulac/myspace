import React, {Dispatch, SetStateAction} from "react";
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

export class Header extends React.Component<{ isSinglePage: boolean, setIsSinglePage: Dispatch<SetStateAction<any>> }> {
	render() {
		let {isSinglePage, setIsSinglePage} = this.props;

		const homeLink = {link: '/', name: 'Home', divId: 'home'};
		const experienceLink = {link: '/#/experience', name: 'Experience', divId: 'experience'};
		const skillsLink = {link: '/#/skills', name: 'Skills', divId: 'skills'};
		const contactLink = {link: '/#/contact', name: 'Contact', divId: 'contact'};
		const links = [homeLink, experienceLink, skillsLink, contactLink];

		function handleHeaderLinkClick(event: React.MouseEvent<HTMLAnchorElement>, link: { link: string; name?: string; divId: string; }) {
			event.preventDefault();

			if (isSinglePage) {
				document.getElementById(link.divId)?.scrollIntoView();
			} else {
				window.location.href = link.link;
			}
		}

		function toggleSinglePage(event: React.MouseEvent<HTMLAnchorElement>) {
			event.preventDefault();
			const toggle = document.getElementById("singlePageToggle") as HTMLAnchorElement;;

			if (isSinglePage) {
				setIsSinglePage(false);
				toggle.className = "single-page-link";
			} else {
				setIsSinglePage(true);
				toggle.className = "single-page-link italic";
				/*if ("pushState" in history) {
					history.pushState("", document.title, window.location.pathname);
				}*/
			}

			const header = document.getElementById('header');
			if (header) {
				window.scrollTo({top: header.offsetTop - 50, behavior: 'smooth',});
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
						<a id={"singlePageToggle"} className={"single-page-link"} onClick={(event) => { toggleSinglePage(event) }}>
							{isSinglePage ? "Single Page Enabled" : "Single Page Off"}
						</a>
						<NavMenu>
							{
								links.map(link =>
									<NavItem key={link.name}>
										<NavLink onClick={(event) => {
											handleHeaderLinkClick(event, link)
										}}>
											{link.name}
										</NavLink>
									</NavItem>
								)
							}
						</NavMenu>
						<MobileNavMenuIcon id={"mobileNavIcon"} onClick={handleMobileMenu}>
							<FontAwesomeIcon icon={faBars}/>
								<MobileNavMenu id={"mobileNav"}>
									<MobileList>
										{
											links.map(link =>
												<MobileNavItem key={link.name}>
													<NavLink onClick={(event) => {
														handleHeaderLinkClick(event, link)
													}}>
														{link.name}
													</NavLink>
												</MobileNavItem>
											)
										}
									</MobileList>
								</MobileNavMenu>
						</MobileNavMenuIcon>
					</NavContainer>
				</HeaderNav>
			</HeaderContainer>
		);
	}
}
