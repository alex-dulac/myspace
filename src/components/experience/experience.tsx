import React from "react";
import {
	ExperienceContainer, ExperienceListContainer, ExperienceContent, ExperienceList, ExperienceListItem
} from "./experience-elements";

export function Experience() {
	return (
		<ExperienceContainer id={"experience"} className={"fade-in scroll-into-margin"}>
			<ExperienceListContainer>
				<h1 className={"sub-header mb-2 purple-text"}>Experience</h1>
				<ExperienceContent className={"navy-text page-content"}>
					<ExperienceList className={"mb-2"}>
						<ExperienceListItem>5 years as a professional full-stack developer has given me a strong foundation of application development best practices.</ExperienceListItem>
						<ExperienceListItem>This time has given me experience writing, testing, and debugging modern code using a variety of programming languages, PHP and Angular with TypeScript in particular.</ExperienceListItem>
						<ExperienceListItem>I have experience with writing tests using a variety of frameworks including PHPUnit, Cypress, and automated testing utilizing Selenium & Sauce Labs.</ExperienceListItem>
						<ExperienceListItem>I am comfortable releasing code to production often, using various tools to deploy and monitor such as Amazon Web Services (AWS) and Datadog.</ExperienceListItem>
						<ExperienceListItem>I understand the importance of translating technical issues into easy-to-understand solutions.</ExperienceListItem>
						<ExperienceListItem>My experience in data integration quality assurance gave me the tools to be proficient with SQL, relation database development & design, and query optimization.</ExperienceListItem>
						<ExperienceListItem>I’m not devoted to any particular language, so no matter the project/tech stack, I’m always eager to jump right in to learning and contributing.</ExperienceListItem>
					</ExperienceList>
				</ExperienceContent>
			</ExperienceListContainer>
		</ExperienceContainer>
	);
}
