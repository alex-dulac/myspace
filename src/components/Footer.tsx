import React, {useContext} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MobileContext } from "@library/MobileContext";
import { FooterContainer, FooterNav, FooterText, NavContainer, NavLink, NavUnorderedList } from "@library/elements";
import { links } from "@library/links";

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
