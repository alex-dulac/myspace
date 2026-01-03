import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MobileContext } from "@hooks/useIsMobile.ts";
import { links } from "@library/links.ts";
import { FooterContainer, FooterNav, FooterText } from "@components/Footer/styles.ts";
import { NavContainer, NavLink, NavUnorderedList } from "@styles/nav-styles.ts";

export function Footer() {
	const isMobile = useContext(MobileContext);
	const footerIcons = (
		<NavUnorderedList>
			{links.map((link, index) => (
				<NavLink href={link.url} target="_blank" key={index}>
					<FontAwesomeIcon icon={link.icon}/>
				</NavLink>
			))}
		</NavUnorderedList>
	);

	return (
		<FooterContainer>
			<FooterNav>
				<NavContainer>
					<FooterText>ALEX DULAC</FooterText>
					{!isMobile && footerIcons}
				</NavContainer>
			</FooterNav>
		</FooterContainer>
	);
}
