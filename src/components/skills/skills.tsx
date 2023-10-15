import React from "react";
import {
	GeneralContainer, GeneralListItem, GeneralContent, GeneralType, GeneralDetail,
} from "../general-elements";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
	faPhp, faJsSquare, faAngular, faReact, faPython, faHtml5, faCss3, faJava, faNodeJs, faLaravel, faSymfony,
} from '@fortawesome/free-brands-svg-icons';

export function Skills() {
	return (
		<GeneralContainer id={"skills"} className={"fade-in"}>
			<h1 className={"sub-header mb-2 purple-text"}>Skills</h1>
			<GeneralContent className={"section"}>

				<GeneralType>Languages </GeneralType>
				<GeneralDetail className={"flex-center mb-2"}>
					<GeneralListItem><FontAwesomeIcon icon={faPhp}/> PHP</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faJsSquare}/> JavaScript</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faCheck}/> TypeScript</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faDatabase}/> SQL</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faJava}/> Java</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faPython}/> Python</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faHtml5}/> HTML</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faCss3}/> CSS</GeneralListItem>
				</GeneralDetail>

				<GeneralType>Frameworks etc. </GeneralType>
				<GeneralDetail className={"flex-center mb-2"}>
					<GeneralListItem><FontAwesomeIcon icon={faAngular}/> Angular</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faReact}/> React</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faNodeJs}/> Node</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faSymfony}/> Symfony</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faLaravel}/> Laravel</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faCheck}/> Doctrine</GeneralListItem>
				</GeneralDetail>

				<GeneralType>Databases </GeneralType>
				<GeneralDetail className={"flex-center mb-2"}>
					<GeneralListItem><FontAwesomeIcon icon={faDatabase}/> MySQL</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faDatabase}/> Oracle</GeneralListItem>
				</GeneralDetail>

				<GeneralType>Knowledge / Experience </GeneralType>
				<GeneralDetail className={"flex-center mb-2"}>
					<div>Object-oriented methodologies and class design, API development, state management, relational database design, query optimization, proficient in debugging and troubleshooting</div>
				</GeneralDetail>

				<GeneralType>Tools: </GeneralType>
				<GeneralDetail className={"flex-center mb-2"}>
					<div>Docker, AWS (S3, RDS, ECS, EC2, SQS, Lambda), DataDog, Sentry, Github, Postman, PHPUnit, Selenium, Jenkins, Jira, Excel</div>
				</GeneralDetail>

			</GeneralContent>
		</GeneralContainer>
	);
}
