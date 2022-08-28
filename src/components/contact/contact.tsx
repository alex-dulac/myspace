import React from "react";
import {
	ContactContainer,
	Header,
	ContactContentContainer,
	ContactContent,
	ContactList,
	ContactListItem, ContactListContainer
} from "./contact-elements";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faLinkedin, faGithub
} from '@fortawesome/free-brands-svg-icons';

export function Contact() {
	return (
		<ContactContainer className={"fade-in"}>
			<Header>
				Contact
			</Header>
			<ContactContentContainer>
				<ContactContent>
					<h4 className={"mb-2"}>Connect with me anytime!</h4>
					<ContactListContainer>
						<ContactList>
							<ContactListItem>
								<a href="mailto:alex@alexdulac.dev" target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faEnvelope}/>
								</a>
								<a href="mailto:alex@alexdulac.dev" target="_blank" rel="noreferrer"> Email</a>
							</ContactListItem>
							<ContactListItem>
								<a href="https://www.linkedin.com/in/alexdulac" target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faLinkedin}/>
								</a>
								<a href="https://www.linkedin.com/in/alexdulac" target="_blank" rel="noreferrer"> LinkedIn</a>
							</ContactListItem>
							<ContactListItem>
								<a href="https://github.com/alex-dulac" target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faGithub}/>
								</a>
								<a href="https://github.com/alex-dulac" target="_blank" rel="noreferrer"> Github</a>
							</ContactListItem>
						</ContactList>
					</ContactListContainer>
				</ContactContent>
			</ContactContentContainer>
		</ContactContainer>
	);
}
