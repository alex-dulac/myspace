import React from "react";
import { FooterContainer, FooterNav, NavContainer, NavMenu, NavItem, NavLink, FooterTitle} from "./footer-elements";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faLastfmSquare } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
	return (
		<FooterContainer>
			<FooterNav>
				<NavContainer>
					<NavMenu>
						<NavItem>
							<NavLink href="mailto:alex@alexdulac.dev">
								<FontAwesomeIcon icon={faEnvelope}/>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.linkedin.com/in/alexdulac/" target="_blank">
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
					</NavMenu>
					<FooterTitle>© 2022 Alex Dulac</FooterTitle>
				</NavContainer>
			</FooterNav>
		</FooterContainer>
	);
}
