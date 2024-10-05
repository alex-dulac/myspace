import React, {Dispatch, SetStateAction, useContext, useEffect, useState} from "react";
import {
	HeaderContainer,
	HeaderNav,
	NavContainer,
	NavMenu,
	NavItem,
	NavLink, MobileNavMenuIcon, MobileNavMenu, MobileNavItem, MobileList
} from "./HeaderElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCopy, faFile } from "@fortawesome/free-solid-svg-icons";
import { MobileContext } from "../../MobileContext";
import { EventParams, logEvent } from "../../GA";

interface Link {
	link: string;
  name: string;
  divId: string;
}

export const Header: React.FC<{
	isSinglePage: boolean;
	setIsSinglePage: Dispatch<SetStateAction<any>>;
	setActivePage: Dispatch<SetStateAction<any>>;
}> = ({ isSinglePage, setIsSinglePage, setActivePage }) => {
	const isMobile = useContext(MobileContext);
	const [isScrollingDown, setIsScrollingDown] = useState(false);
	const [lastScrollTop, setLastScrollTop] = useState(0);

	const homeLink: Link = { link: '/', name: 'Home', divId: 'home' };
	const experienceLink: Link = { link: '/#/experience', name: 'Experience', divId: 'experience' };
	const skillsLink: Link = { link: '/#/skills', name: 'Skills', divId: 'skills' };
	const aboutLink: Link = { link: '/#/about', name: 'About Me', divId: 'about' };
	const contactLink: Link = { link: '/#/contact', name: 'Contact', divId: 'contact' };

	const links: Link[] = [
		homeLink,
		experienceLink,
		skillsLink,
		aboutLink,
		contactLink
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = document.documentElement.scrollTop;
			if (scrollTop > lastScrollTop) {
				setIsScrollingDown(true);
			} else {
				setIsScrollingDown(false);
			}
			setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollTop]);

	function handleHeaderLinkClick(event: React.MouseEvent<HTMLAnchorElement>, link: Link) {
		event.preventDefault();

		if (isSinglePage) {
			document.getElementById(link.divId)?.scrollIntoView({block: "start", behavior: "smooth"});
		} else {
			setActivePage(link.name);
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

		const gaEvent: EventParams = {
			category: "User Interaction",
			action: "Toggle Single Page",
			label: isSinglePage ? "Single Page Enabled" : "Single Page Disabled"
		};
		logEvent(gaEvent);
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
		<HeaderContainer id={"header"} isSinglePage={isSinglePage} isScrollingDown={isScrollingDown}>
			<HeaderNav>
				<NavContainer>
					{isMobile ?
						<>
							<MobileNavMenuIcon id={"mobileNavIcon"} onClick={handleMobileMenu}>
								<FontAwesomeIcon icon={faBars}/>
								<MobileNavMenu id={"mobileNav"}>
									<MobileList>
										<a
											id={"singlePageToggle"}
											className={"single-page-link mb-2"}
											href={"/#"}
											onClick={(event) => toggleSinglePage(event)}
										>
											{isSinglePage ?
												<FontAwesomeIcon icon={faFile} size={"lg"} title={"Single Page Enabled"}/> :
												<FontAwesomeIcon icon={faCopy} size={"lg"} title={"Single Page Disabled"}/>
											}
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
							<a
								id={"singlePageToggle"}
								className={"single-page-link"}
								href={"/#"}
								onClick={(event) => {toggleSinglePage(event);}}
							>
								{isSinglePage ?
									<FontAwesomeIcon icon={faFile} size={"2x"} title={"Single Page Enabled"}/> :
									<FontAwesomeIcon icon={faCopy} size={"2x"} title={"Single Page Disabled"}/>
								}
							</a>
						</>
					}
				</NavContainer>
			</HeaderNav>
		</HeaderContainer>
	);
}
