import React from "react";
import {
	ExperienceContainer, ExperienceListContainer, ExperienceContent, ExperienceList, ExperienceListItem,
	HistoryContainer, HistoryItem, HistoryDetails, HistoryTime, Resume
} from "./experience-elements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

export function Experience() {
	return (
		<ExperienceContainer className={"fade-in"}>
			<ExperienceListContainer>
				<h1 className={"sub-header mb-2 purple-text"}>Experience</h1>
				<ExperienceContent className={"navy-text page-content"}>
					<ExperienceList className={"mb-2"}>
						<ExperienceListItem>My four years as a professional full-stack software developer has provided me deep understanding of web application development best practices.</ExperienceListItem>
						<ExperienceListItem>This time has given me experience writing, testing, and debugging modern code using PHP and Angular with TypeScript.</ExperienceListItem>
						<ExperienceListItem>I have experience with writing tests using a variety of frameworks including PHPUnit, Cypress, and automated testing utilizing Selenium & Sauce Labs.</ExperienceListItem>
						<ExperienceListItem>I am comfortable releasing code to production often, using various tools to deploy and monitor such as Amazon Web Services (AWS), Jenkins, and Datadog.</ExperienceListItem>
						<ExperienceListItem>I understand the importance of translating technical issues into easy-to-understand solutions, and take pride in my ability to do so.</ExperienceListItem>
						<ExperienceListItem>My experience in database operations gave me the tools to be proficient with SQL, relation database development & design, and query optimization.</ExperienceListItem>
					</ExperienceList>
				</ExperienceContent>
			</ExperienceListContainer>
		</ExperienceContainer>
	);
}
