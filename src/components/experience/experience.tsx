import React from "react";
import {
	ExperienceContainer, ExperienceContentContainer, ExperienceContent, ExperienceList
} from "./experience-elements";

export function Experience() {
	return (
		<ExperienceContainer className={"fade-in"}>
			<ExperienceContentContainer>
				<h1 className={"page-header"}>
					<span className={"purple-text"}>Experience</span>
				</h1>
				<ExperienceContent className={"navy-text page-content"}>
					<ExperienceList>
						<li>My four years as a professional full-stack software developer has provided me deep understanding of web application development best practices.</li>
						<li>This time has also given me experience writing, testing, and debugging modern code using PHP 7.4+ and Angular 6+ with TypeScript.</li>
						<li>I am comfortable releasing code often using various AWS tools to deploy and monitor.</li>
						<li>I am familiar with stack systems such as Nginx, Apache, and memcached.</li>
						<li>Ensured seamless communication for various production support escalations by translating technical issues into easy-to-understand solutions.</li>
						<li>I have experience with writing unit tests, as well as automated testing with Selenium.</li>
						<li>My experience in database operations gave me the tools to be proficient with SQL, relation database development & design, and query optimization.</li>
					</ExperienceList>
				</ExperienceContent>
			</ExperienceContentContainer>
		</ExperienceContainer>
	);
}
