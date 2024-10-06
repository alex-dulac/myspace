import React, {useContext} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MobileContext } from "@utils/MobileContext";
import { NavContainer, NavItem, NavLink, NavMenu } from "@elements/HeaderElements";
import { FooterContainer, FooterNav } from "@elements/Elements";
import { links } from "@utils/links";

export function Footer() {
	const isMobile = useContext(MobileContext);

	return (
		<FooterContainer>
			<FooterNav>
				<NavContainer>
					<h3 className={"footer-name"}>
						<span className={"text"}>ALEX DULAC</span>
					</h3>

					{!isMobile ?
						<NavMenu>
							{links.map((link, index) => (
                <NavItem key={index}>
									<NavLink href={link.url}>
										<FontAwesomeIcon icon={link.icon}/>
									</NavLink>
								</NavItem>
							))}
						</NavMenu> : null
					}
				</NavContainer>
			</FooterNav>
		</FooterContainer>
	);
}
