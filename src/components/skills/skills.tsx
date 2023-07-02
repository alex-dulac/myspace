import React from "react";
import {
	SkillsContainer, SkillListItem, SkillsContent, SkillsType, SkillsDetail,
} from "./skills-elements";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
	faPhp, faJsSquare, faAngular, faReact, faPython, faHtml5, faCss3, faJava, faNodeJs, faLaravel, faSymfony,
} from '@fortawesome/free-brands-svg-icons';

export function Skills() {
	return (
		<SkillsContainer className={"fade-in"}>
			<h1 className={"sub-header mb-2 purple-text"}>Skills</h1>
			<SkillsContent className={"section"}>

				<SkillsType>Languages </SkillsType>
				<SkillsDetail className={"flex-center mb-2"}>
					<SkillListItem><FontAwesomeIcon icon={faPhp}/> PHP</SkillListItem>
					<SkillListItem><FontAwesomeIcon icon={faJsSquare}/> JavaScript</SkillListItem>
					<SkillListItem><FontAwesomeIcon icon={faCheck}/> TypeScript</SkillListItem>
					<SkillListItem><FontAwesomeIcon icon={faDatabase}/> SQL</SkillListItem>
					<SkillListItem><FontAwesomeIcon icon={faJava}/> Java</SkillListItem>
					<SkillListItem><FontAwesomeIcon icon={faPython}/> Python</SkillListItem>
					<SkillListItem><FontAwesomeIcon icon={faHtml5}/> HTML</SkillListItem>
					<SkillListItem><FontAwesomeIcon icon={faCss3}/> CSS</SkillListItem>
				</SkillsDetail>

				<SkillsType>Frameworks etc. </SkillsType>
				<SkillsDetail className={"flex-center mb-2"}>
					<SkillListItem><FontAwesomeIcon icon={faAngular}/> Angular</SkillListItem>
					<SkillListItem><FontAwesomeIcon icon={faReact}/> React</SkillListItem>
					<SkillListItem><FontAwesomeIcon icon={faNodeJs}/> Node.js</SkillListItem>
					<SkillListItem><FontAwesomeIcon icon={faLaravel}/> Laravel</SkillListItem>
					<SkillListItem><FontAwesomeIcon icon={faCheck}/> Doctrine</SkillListItem>
					<SkillListItem><FontAwesomeIcon icon={faSymfony}/> Symfony</SkillListItem>
				</SkillsDetail>

				<SkillsType>Databases </SkillsType>
				<SkillsDetail className={"flex-center mb-2"}>
					<SkillListItem><FontAwesomeIcon icon={faDatabase}/> MySQL</SkillListItem>
					<SkillListItem><FontAwesomeIcon icon={faDatabase}/> Oracle</SkillListItem>
				</SkillsDetail>

				<SkillsType>Knowledge / Experience </SkillsType>
				<SkillsDetail className={"flex-center mb-2"}>
					<div>Object-oriented methodologies and class design, API development, state management, relational database design, query optimization, proficient in debugging and troubleshooting</div>
				</SkillsDetail>

				<SkillsType>Tools: </SkillsType>
				<SkillsDetail className={"flex-center mb-2"}>
					<div>Docker, AWS (S3, RDS, ECS, EC2, SQS, Lambda), DataDog, Sentry, Github, Postman, PHPUnit, Selenium, Jenkins, Jira, Excel</div>
				</SkillsDetail>

			</SkillsContent>
		</SkillsContainer>
	);
}
