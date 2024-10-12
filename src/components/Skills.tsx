import React from "react";
import {
	Container, Span, Content, PageSubheaderLeft, RowColumnFlex
} from "@library/elements";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
	faPhp, faJsSquare, faAngular, faReact, faPython, faHtml5, faCss3, faJava, faNodeJs, faLaravel, faSymfony,
} from '@fortawesome/free-brands-svg-icons';

export function Skills() {
	return (
		<Container id={"skills"}>
			<Content>
				<PageSubheaderLeft>Languages </PageSubheaderLeft>
				<RowColumnFlex>
					<Span>
						<FontAwesomeIcon icon={faPython}/> Python
					</Span>
					<Span>
						<FontAwesomeIcon icon={faPhp}/> PHP
					</Span>
					<Span>
						<FontAwesomeIcon icon={faJsSquare}/> JavaScript
					</Span>
					<Span>
						<FontAwesomeIcon icon={faCheck}/> TypeScript
					</Span>
				</RowColumnFlex>
				<RowColumnFlex>
					<Span>
						<FontAwesomeIcon icon={faDatabase}/> SQL
					</Span>
					<Span>
						<FontAwesomeIcon icon={faJava}/> Java
					</Span>
					<Span>
						<FontAwesomeIcon icon={faHtml5}/> HTML
					</Span>
					<Span>
						<FontAwesomeIcon icon={faCss3}/> CSS
					</Span>
				</RowColumnFlex>

				<PageSubheaderLeft>Frameworks etc. </PageSubheaderLeft>
				<RowColumnFlex>
					<Span>
						<FontAwesomeIcon icon={faCheck}/> FastAPI
					</Span>
					<Span>
						<FontAwesomeIcon icon={faCheck}/> Django
					</Span>
					<Span>
						<FontAwesomeIcon icon={faSymfony}/> Symfony
					</Span>
					<Span>
						<FontAwesomeIcon icon={faLaravel}/> Laravel
					</Span>
				</RowColumnFlex>
				<RowColumnFlex>
					<Span>
						<FontAwesomeIcon icon={faReact}/> React
					</Span>
					<Span>
						<FontAwesomeIcon icon={faAngular}/> Angular
					</Span>
					<Span>
						<FontAwesomeIcon icon={faNodeJs}/> Node
					</Span>
					<Span>
						<FontAwesomeIcon icon={faCheck}/> Next.js
					</Span>
				</RowColumnFlex>

				<PageSubheaderLeft>Databases </PageSubheaderLeft>
				<RowColumnFlex>
					<Span>
						<FontAwesomeIcon icon={faDatabase}/> MySQL
					</Span>
					<Span>
						<FontAwesomeIcon icon={faDatabase}/> MongoDB
					</Span>
					<Span>
						<FontAwesomeIcon icon={faDatabase}/> PostgreSQL
					</Span>
					<Span>
						<FontAwesomeIcon icon={faDatabase}/> Oracle
					</Span>
				</RowColumnFlex>

				<PageSubheaderLeft>Knowledge / Experience </PageSubheaderLeft>
				<RowColumnFlex>
					<p>Object-oriented methodologies and class design, API development (REST, GraphQL), state management (Redux,
						NgRx), relational database design, query optimization, proficient in debugging and troubleshooting,
						implementation of third-party integrations</p>
				</RowColumnFlex>

				<PageSubheaderLeft>Tools </PageSubheaderLeft>
				<RowColumnFlex>
					<p>Docker, AWS (<span className={"italic"}>S3, RDS, ECS, EC2, SQS, Lambda</span>), DataDog, Sentry, Github,
						Postman, PHPUnit, Selenium, Jenkins, Jira, Excel</p>
				</RowColumnFlex>

			</Content>
		</Container>
	);
}
