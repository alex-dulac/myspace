import React, {useContext} from "react";
import { FooterContainer, FooterNav, NavContainer, NavMenu, NavItem, NavLink} from "./FooterElements";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faLastfmSquare } from '@fortawesome/free-brands-svg-icons';
import {MobileContext} from "../../MobileContext";

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
							<NavItem>
								<NavLink href="mailto:alex@alexdulac.dev">
									<FontAwesomeIcon icon={faEnvelope}/>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://www.linkedin.com/in/alexdulac" target="_blank">
									<FontAwesomeIcon icon={faLinkedinIn} />
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/alex-dulac" target="_blank">
									<FontAwesomeIcon icon={faGithub} />
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://www.last.fm/user/alexdulac" target="_blank">
									<FontAwesomeIcon icon={faLastfmSquare} />
								</NavLink>
							</NavItem>
						</NavMenu> : null
					}
				</NavContainer>
			</FooterNav>
		</FooterContainer>
	);
}
