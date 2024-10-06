import React, {useContext} from "react";
import {
	Container, GeneralListItem, Content, GeneralType, GeneralDetail,
} from "../elements/Elements";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
	faPhp, faJsSquare, faAngular, faReact, faPython, faHtml5, faCss3, faJava, faNodeJs, faLaravel, faSymfony,
} from '@fortawesome/free-brands-svg-icons';
import {MobileContext} from "../MobileContext";

export function Skills() {
	const isMobile = useContext(MobileContext);

	return (
		<Container isMobile={isMobile} id={"skills"} className={"fade-in scroll-into-margin"}>
			<Content className={"section"}>
				<h1 className={"sub-header mb-2 text"}>Skills</h1>

				<GeneralType>Languages </GeneralType>
				<GeneralDetail className={"flex-center mb-2"}>
					<GeneralListItem><FontAwesomeIcon icon={faPython}/> Python</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faPhp}/> PHP</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faJsSquare}/> JavaScript</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faCheck}/> TypeScript</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faDatabase}/> SQL</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faJava}/> Java</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faHtml5}/> HTML</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faCss3}/> CSS</GeneralListItem>
				</GeneralDetail>

				<GeneralType>Frameworks etc. </GeneralType>
				<GeneralDetail className={"flex-center mb-2"}>
					<GeneralListItem><FontAwesomeIcon icon={faCheck}/> FastAPI</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faCheck}/> Django</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faReact}/> React</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faAngular}/> Angular</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faNodeJs}/> Node</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faSymfony}/> Symfony</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faLaravel}/> Laravel</GeneralListItem>
				</GeneralDetail>

				<GeneralType>Databases </GeneralType>
				<GeneralDetail className={"flex-center mb-2"}>
					<GeneralListItem><FontAwesomeIcon icon={faDatabase}/> MySQL</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faDatabase}/> MongoDB</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faDatabase}/> PostgreSQL</GeneralListItem>
					<GeneralListItem><FontAwesomeIcon icon={faDatabase}/> Oracle</GeneralListItem>
				</GeneralDetail>

				<GeneralType>Knowledge / Experience </GeneralType>
				<GeneralDetail className={"flex-center mb-2"}>
					<p>Object-oriented methodologies and class design, API development (REST, GraphQL), state management (Redux,
						NgRx), relational database design, query optimization, proficient in debugging and troubleshooting,
						implementation of third-party integrations</p>
				</GeneralDetail>

				<GeneralType>Tools: </GeneralType>
				<GeneralDetail className={"flex-center mb-2"}>
					<p>Docker, AWS (<span className={"italic"}>S3, RDS, ECS, EC2, SQS, Lambda</span>), DataDog, Sentry, Github,
						Postman, PHPUnit, Selenium, Jenkins, Jira, Excel</p>
				</GeneralDetail>

			</Content>
		</Container>
	);
}
