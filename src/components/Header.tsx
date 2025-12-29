import { type Dispatch, type FC, type SetStateAction, useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCompress, faExpand, faTimes } from "@fortawesome/free-solid-svg-icons";
import { MobileContext } from "@library/MobileContext";
import { type EventParams, logGAEvent, logPageView } from "@library/ga";
import {
	HeaderContainer,
	HeaderNav, MobileList, MobileNavMenu, MobileNavMenuIcon,
	NavContainer,
	NavLink,
	NavUnorderedList,
	ShowAllToggle
} from "@library/elements";
import { type Page, pages } from "@components/Layout";
import { getMostVisiblePage, scrollToSection } from "@library/utils";

interface HeaderProps {
	showAll: boolean;
	setShowAll: Dispatch<SetStateAction<boolean>>;
	activePage: Page;
	setActivePage: Dispatch<SetStateAction<Page>>;
}

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
	const { showAll, setShowAll, activePage, setActivePage } = props;
	const isMobile = useContext(MobileContext);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

			if (showAll && shouldUpdateActivePage) {
				const mostVisiblePage = getMostVisiblePage();
				if (mostVisiblePage && mostVisiblePage !== activePage) {
					setActivePage(mostVisiblePage);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollTop, showAll, shouldUpdateActivePage, activePage, setActivePage]);

	useEffect(() => {
		if (!isMobile) {
			setIsMobileMenuOpen(false);
		}
	}, [isMobile]);

	const handleHeaderLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
		event.preventDefault();

		if (showAll) {
			scrollToSection(page, true);
		}

		logPageView(page.path, page.name);
		setActivePage(page);

		if (isMobile) {
			setIsMobileMenuOpen(false);
		}
	}

	const toggleShowAll = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		const wasShowAll = showAll;

		setShouldUpdateActivePage(false);
		setShowAll(!showAll);

		const gaEvent: EventParams = {
			category: "User Interaction",
			action: "Toggle All Pages",
			label: showAll ? "Show All Enabled" : "Show All Disabled"
		};

		logGAEvent(gaEvent);

		setTimeout(() => {
			if (wasShowAll) {
				const mostVisiblePage = getMostVisiblePage();
				if (mostVisiblePage) {
					scrollToSection(mostVisiblePage, true);
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

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
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

	const showAllToggle = (
		<ShowAllToggle
			id={"showAllToggle"}
			onClick={(event) => toggleShowAll(event)}
		>
			{showAll ? (
				<FontAwesomeIcon icon={faCompress} size="2x" title="Minimize to per-page view"/>
			) : (
				<FontAwesomeIcon icon={faExpand} size="2x" title="Show all pages"/>
			)}
		</ShowAllToggle>
	);

	return (
		<HeaderContainer showAll={showAll} isScrollingDown={isScrollingDown}>
			<HeaderNav>
				<NavContainer>
					{isMobile ? (
						<>
							<MobileNavMenuIcon onClick={toggleMobileMenu}>
								<FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars}/>
							</MobileNavMenuIcon>
							{showAllToggle}
							<MobileNavMenu isOpen={isMobileMenuOpen}>
								<MobileList>
									{headerLinkElements}
								</MobileList>
							</MobileNavMenu>
						</>
						) : (
							<>
								<NavUnorderedList>
									{headerLinkElements}
								</NavUnorderedList>
								{showAllToggle}
							</>
					)}
				</NavContainer>
			</HeaderNav>
		</HeaderContainer>
	);
}
