import React from "react";
import {
	Container, Span, Content, PageSubheaderLeft, RowColumnFlex, UnorderedList, ListItem
} from "@library/elements";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
	faPhp,
	faJsSquare,
	faAngular,
	faReact,
	faPython,
	faJava,
	faNodeJs,
	faLaravel,
	faSymfony,
} from '@fortawesome/free-brands-svg-icons';

const languagesAndFrameworks = [
	{
		icon: faPython,
		name: "Python",
		frameworks: [
			{ icon: faCircleCheck, name: "FastAPI" },
			{ icon: faCircleCheck, name: "Django "},
			{ icon: faCircleCheck, name: "Django REST Framework" },
			{ icon: faCircleCheck, name: "SQLAlchemy" },
			{ icon: faCircleCheck, name: "Beanie" },
		]
	},
	{
		icon: faJsSquare,
		name: "TypeScript / JavaScript",
		frameworks: [
			{ icon: faReact, name: "React" },
			{ icon: faAngular, name: "Angular" },
			{ icon: faNodeJs, name: "Node" },
			{ icon: faCircleCheck, name: "Next" },
		]
	},
	{
		icon: faPhp,
		name: "PHP",
		frameworks: [
			{ icon: faSymfony, name: "Symfony" },
			{ icon: faLaravel, name: "Laravel" },
		]
	},
	{
		icon: faJava,
		name: "Java",
		frameworks: [
			{ icon: faCircleCheck, name: "Spring Boot" },
		]
	},
]

const databases = [
	{ icon: faDatabase, name: "MySQL" },
	{ icon: faDatabase, name: "PostgreSQL" },
	{ icon: faDatabase, name: "MongoDB" },
	{ icon: faDatabase, name: "PL/SQL" },
]

const broaderSkills = [
	"Object-oriented methodologies and class design",
	<>API development (<span className="italic"> REST, GraphQL </span>)</>,
	<>State management (<span className="italic"> Redux, NgRx </span>)</>,
	"Relational database design",
	"Query optimization",
	"Proficient in debugging and troubleshooting",
	"Implementation of third-party integrations",
	<>Unit testing and e2e testing (<span className="italic"> PHPUnit, Pytest, Jest, Cypress </span>)</>,
]

const tools = [
	<>AWS (including <span className="italic">S3, RDS, ECS, EC2, ECR, Cloudwatch, SQS, Lambda, boto3 </span>)</>,
	<>Deployment tooling (<span className="italic"> Docker, Jenkins, Github Actions </span>)</>,
	<>Monitoring (<span className="italic"> Datadog, Sentry </span>)</>,
	<>Workflow (<span className="italic"> Github, Jira, Confluence, Figma </span>)</>,
];

const LanguagesAndFrameworks: React.FC = () => (
	<>
		<PageSubheaderLeft>{"Languages & Frameworks"}</PageSubheaderLeft>
		<div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
			{languagesAndFrameworks.map((skill, index) => (
				<div key={index} style={{display: 'flex', flexDirection: 'column'}}>
					<Span style={{
						fontWeight: 'bold',
						textDecoration: 'underline',
						marginBottom: '5px',
						marginLeft: '30px'
					}}>
						<FontAwesomeIcon icon={skill.icon}/> {skill.name}
					</Span>
					{skill.frameworks && (
						<RowColumnFlex style={{marginLeft: '20px', flexWrap: 'wrap', gap: '10px'}}>
							{skill.frameworks.map((framework, index) => (
								<Span key={index}>
									<FontAwesomeIcon icon={framework.icon}/> {framework.name}
								</Span>
							))}
						</RowColumnFlex>
					)}
				</div>
			))}
		</div>
	</>
);

const Databases: React.FC = () => (
	<>
		<PageSubheaderLeft>{"Databases"}</PageSubheaderLeft>
		<RowColumnFlex style={{marginLeft: '20px', flexWrap: 'wrap', gap: '10px'}}>
			{databases.map((skill, index) => (
				<Span key={index}>
					<FontAwesomeIcon icon={skill.icon}/> {skill.name}
				</Span>
			))}
		</RowColumnFlex>
	</>
);

const TextSection: React.FC<{ title: string; content: React.ReactNode[] }> = ({title, content}) => (
	<>
		<PageSubheaderLeft>{title}</PageSubheaderLeft>
		<RowColumnFlex>
			<UnorderedList style={{ textAlign: 'center' }}>
				{content.map((item, index) => (
					<ListItem key={index}>{item}</ListItem>
				))}
			</UnorderedList>
		</RowColumnFlex>
	</>
);

export function Skills() {
	return (
		<Container id={"skills"}>
			<Content>
				<LanguagesAndFrameworks />
				<Databases />
				<TextSection title="Knowledge / Experience" content={broaderSkills}/>
				<TextSection title="Tools" content={tools}/>
			</Content>
		</Container>
	);
}
