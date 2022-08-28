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
			<HistoryContainer>
				<h1 className={"sub-header mb-2 purple-text"}>Professional History</h1>
				<HistoryItem>
					<HistoryDetails>
						<h2 className={"teal-text"}>Application Developer</h2>
						<h3>IDEXX Laboratories</h3>
						<p className={"mb-1 italic"}>Full-stack software developer for a SaaS product of an S&P 500 company.</p>
						<p><span className={"bold"}>Skills used:</span> PHP 7.4+, Angular 6+, TypeScript, JavaScript, MySQL, HTML, CSS, Python, Docker, and AWS</p>
					</HistoryDetails>
					<HistoryTime>
						<span className={"magenta-text"}>
							September 2018 - Present
							<br/>Westbrook, Maine
						</span>
					</HistoryTime>
				</HistoryItem>
				<HistoryItem>
					<HistoryDetails>
						<h2 className={"teal-text"}>Data Analyst</h2>
						<h3>Onpoint Health Data</h3>
						<p className={"mb-1 italic"}>Investigate, understand, and address data issues that arise in delivering data integration and analytic services.</p>
						<p><span className={"bold"}>Skills used:</span> SQL, PL/SQL, Excel, SAS</p>
					</HistoryDetails>
					<HistoryTime>
						<span className={"magenta-text"}>
							July 2017 - September 2018
							<br/>Portland, Maine
						</span>
					</HistoryTime>
				</HistoryItem>
			</HistoryContainer>
			<Resume>
				<a href="/resume.pdf" target="_blank">
					<FontAwesomeIcon icon={faFile}/>
				</a>
				<a href="/resume.pdf" target="_blank">View Full Resume</a>
			</Resume>
			<ExperienceListContainer>
				<h1 className={"sub-header mb-2 purple-text"}>Experience</h1>
				<ExperienceContent className={"navy-text page-content"}>
					<ExperienceList className={"mb-2"}>
						<ExperienceListItem>My four years as a professional full-stack software developer has provided me deep understanding of web application development best practices.</ExperienceListItem>
						<ExperienceListItem>This time has given me experience writing, testing, and debugging modern code using PHP 7.4+ and Angular 6+ with TypeScript.</ExperienceListItem>
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
