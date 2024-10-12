import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFile, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { MobileContext } from "@library/MobileContext";
import { EventParams, logGAEvent } from "@library/ga";
import {
	HeaderContainer,
	HeaderNav, MobileList, MobileNavMenu, MobileNavMenuIcon,
	NavContainer,
	NavLink,
	NavUnorderedList,
	SinglePageLink
} from "@library/elements";

interface HeaderLink {
	link: string;
	name: string;
	divId: string;
}

interface HeaderProps {
	isSinglePage: boolean;
  setIsSinglePage: Dispatch<SetStateAction<any>>;
  setActivePage: Dispatch<SetStateAction<any>>;
}

export const Header: React.FC<HeaderProps> = ({ isSinglePage, setIsSinglePage, setActivePage }) => {
	const isMobile = useContext(MobileContext);
	const [isScrollingDown, setIsScrollingDown] = useState(false);
	const [lastScrollTop, setLastScrollTop] = useState(0);

	const homeLink: HeaderLink = { link: '/', name: 'Home', divId: 'home' };
	const experienceLink: HeaderLink = { link: '/#/experience', name: 'Experience', divId: 'experience' };
	const skillsLink: HeaderLink = { link: '/#/skills', name: 'Skills', divId: 'skills' };
	const aboutLink: HeaderLink = { link: '/#/about', name: 'About Me', divId: 'about' };
	const contactLink: HeaderLink = { link: '/#/contact', name: 'Contact', divId: 'contact' };

	const headerLinks: HeaderLink[] = [
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

	function handleHeaderLinkClick(event: React.MouseEvent<HTMLAnchorElement>, link: HeaderLink) {
		event.preventDefault();

		if (isSinglePage) {
			document.getElementById(link.divId)?.scrollIntoView({
				block: "start",
				behavior: "smooth"
			});
		} else {
			setActivePage(link.name);
		}
	}

	function toggleSinglePage(event: React.MouseEvent<HTMLAnchorElement>) {
		event.preventDefault();
		isSinglePage ? setIsSinglePage(false) : setIsSinglePage(true);

		const gaEvent: EventParams = {
			category: "User Interaction",
			action: "Toggle Single Page",
			label: isSinglePage ? "Single Page Enabled" : "Single Page Disabled"
		};
		logGAEvent(gaEvent);
	}

	function handleMobileMenu() {
		const mobileNav = document.getElementById("mobileNav") as HTMLDivElement;
		if (mobileNav.style.display === "block") {
			mobileNav.style.display = "none";
		} else {
			mobileNav.style.display = "block";
		}
	}

	const headerLinkElements =
		headerLinks.map((link: HeaderLink) =>
			<NavLink
				key={link.name}
				className={isMobile ? 'mb-1' : ''}
				onClick={(event) => handleHeaderLinkClick(event, link)}
			>
				{link.name}
			</NavLink>
	);

	const singlePageToggle =
		<SinglePageLink
			id={"singlePageToggle"}
			onClick={(event) => toggleSinglePage(event)}
		>
			{isSinglePage ? (
				<FontAwesomeIcon icon={faFile} size="2x" title="Single Page Enabled"/>
			) : (
				<FontAwesomeIcon icon={faLayerGroup} size="2x" title="Single Page Disabled"/>
			)}
		</SinglePageLink>
	;

	return (
		<HeaderContainer isSinglePage={isSinglePage} isScrollingDown={isScrollingDown}>
			<HeaderNav>
				<NavContainer>
					{isMobile ? (
						<MobileNavMenuIcon onClick={handleMobileMenu}>
							<FontAwesomeIcon icon={faBars}/>
							<MobileNavMenu id={"mobileNav"}>
								<MobileList>
									{singlePageToggle}
									{headerLinkElements}
								</MobileList>
							</MobileNavMenu>
						</MobileNavMenuIcon>
						) : (
							<>
								<NavUnorderedList>
									{headerLinkElements}
								</NavUnorderedList>
								{singlePageToggle}
							</>
					)}
				</NavContainer>
			</HeaderNav>
		</HeaderContainer>
	);
}
