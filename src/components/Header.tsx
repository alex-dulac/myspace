import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCompress, faExpand } from "@fortawesome/free-solid-svg-icons";
import { MobileContext } from "@library/MobileContext";
import { EventParams, logGAEvent, logPageView } from "@library/ga";
import {
	HeaderContainer,
	HeaderNav, MobileList, MobileNavMenu, MobileNavMenuIcon,
	NavContainer,
	NavLink,
	NavUnorderedList,
	SinglePageLink
} from "@library/elements";
import { Page, pages } from "@components/Layout";
import { getMostVisiblePage, scrollToSection } from "@library/utils";

interface HeaderProps {
	isSinglePage: boolean;
	setIsSinglePage: Dispatch<SetStateAction<boolean>>;
	activePage: Page;
	setActivePage: Dispatch<SetStateAction<Page>>;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
	const { isSinglePage, setIsSinglePage, activePage, setActivePage } = props;
	const isMobile = useContext(MobileContext);
	const [isScrollingDown, setIsScrollingDown] = useState(false);
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [shouldUpdateActivePage, setShouldUpdateActivePage] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = document.documentElement.scrollTop;
			if (scrollTop > lastScrollTop) {
				setIsScrollingDown(true);
			} else {
				setIsScrollingDown(false);
			}
			setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);

			if (isSinglePage && shouldUpdateActivePage) {
				const mostVisiblePage = getMostVisiblePage();
				if (mostVisiblePage && mostVisiblePage !== activePage) {
					setActivePage(mostVisiblePage);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollTop, isSinglePage, shouldUpdateActivePage, activePage, setActivePage]);

	const handleHeaderLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
		event.preventDefault();

		if (isSinglePage) {
			scrollToSection(page, true);
		}

		logPageView(page.path, page.name);
		setActivePage(page);
	}

	const toggleSinglePage = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		const wasSinglePage = isSinglePage;

		setShouldUpdateActivePage(false);
		setIsSinglePage(!isSinglePage);

		const gaEvent: EventParams = {
			category: "User Interaction",
			action: "Toggle Single Page",
			label: isSinglePage ? "Single Page Enabled" : "Single Page Disabled"
		};

		logGAEvent(gaEvent);

		setTimeout(() => {
			if (wasSinglePage) {
				const mostVisiblePage = getMostVisiblePage();
				if (mostVisiblePage) {
					scrollToSection(mostVisiblePage, false);
					setActivePage(mostVisiblePage);
				}
			} else {
				scrollToSection(activePage, false);
			}

			// Re-enable updating of active page after a short delay
			// otherwise, scrolling to the sections inadvertently overwrites it
			setTimeout(() => {
				setShouldUpdateActivePage(true);
			}, 500);
		}, 100);
	}

	const handleMobileMenu = () => {
		const mobileNav = document.getElementById("mobileNav") as HTMLDivElement;
		if (mobileNav.style.display === "block") {
			mobileNav.style.display = "none";
		} else {
			mobileNav.style.display = "block";
		}
	}

	const headerLinkElements = pages.map((page: Page) => {
		const className = `${isMobile ? 'mb-1' : ''} ${page === activePage ? 'italic' : ''}`;
		return (
			<NavLink
				key={page.name}
				className={className}
				onClick={(event) => handleHeaderLinkClick(event, page)}
			>
				{page.name}
			</NavLink>
		)
	});

	const singlePageToggle = (
		<SinglePageLink
			id={"singlePageToggle"}
			onClick={(event) => toggleSinglePage(event)}
		>
			{isSinglePage ? (
				<FontAwesomeIcon icon={faCompress} size="2x" title="Minimize to per-page view"/>
			) : (
				<FontAwesomeIcon icon={faExpand} size="2x" title="Show all pages"/>
			)}
		</SinglePageLink>
	);

	return (
		<HeaderContainer isSinglePage={isSinglePage} isScrollingDown={isScrollingDown}>
			<HeaderNav>
				<NavContainer>
					{isMobile ? (
						<>
							<MobileNavMenuIcon onClick={handleMobileMenu}>
								<FontAwesomeIcon icon={faBars}/>
								<MobileNavMenu id={"mobileNav"}>
									<MobileList>
										{headerLinkElements}
									</MobileList>
								</MobileNavMenu>
							</MobileNavMenuIcon>
							{singlePageToggle}
						</>
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
