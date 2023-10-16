import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {
	HeaderContainer,
	HeaderNav,
	NavContainer,
	NavMenu,
	NavItem,
	NavLink, MobileNavMenuIcon, MobileNavMenu, MobileNavItem, MobileList, PrimaryToggleDiv
} from "./header-elements";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export class Header extends React.Component<{
	isSinglePage: boolean,
	setIsSinglePage: Dispatch<SetStateAction<any>>
}> {
	render() {
		let {isSinglePage, setIsSinglePage} = this.props;

		const homeLink = {link: '/', name: 'Home', divId: 'home'};
		const experienceLink = {link: '/#/experience', name: 'Experience', divId: 'experience'};
		const skillsLink = {link: '/#/skills', name: 'Skills', divId: 'skills'};
		const interestsLink = {link: '/#/interests', name: 'About Me', divId: 'interests'};
		const contactLink = {link: '/#/contact', name: 'Contact', divId: 'contact'};
		const links = [homeLink, experienceLink, skillsLink, interestsLink, contactLink];

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
						<NavMenu>
							{
								links.map(link =>
									<NavItem key={link.name}>
										<NavLink href={"#"} onClick={(event) => { handleHeaderLinkClick(event, link) }}>
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
										<a id={"singlePageToggle"} className={"single-page-link mb-2"} href={"#"} onClick={(event) => {
											toggleSinglePage(event)
										}}>
											{isSinglePage ? "Single Page Enabled" : "Toggle Single Page"}
										</a>
										{
											links.map(link =>
												<MobileNavItem key={link.name} className={'mb-1'}>
													<NavLink href={"#"} onClick={(event) => { handleHeaderLinkClick(event, link)}}>
														{link.name}
													</NavLink>
												</MobileNavItem>
											)
										}
									</MobileList>
								</MobileNavMenu>
						</MobileNavMenuIcon>
						<PrimaryToggleDiv>
							<a id={"singlePageToggle"} className={"single-page-link"} href={"#"} onClick={(event) => {
								toggleSinglePage(event)
							}}>
								{isSinglePage ? "Single Page Enabled" : "Toggle Single Page"}
							</a>
						</PrimaryToggleDiv>
					</NavContainer>
				</HeaderNav>
			</HeaderContainer>
		);
	}
}
