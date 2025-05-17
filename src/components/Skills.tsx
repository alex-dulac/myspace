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
	IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

interface Framework {
	name: string;
	icon: IconDefinition;
}

interface Skill {
	name: string;
	icon: IconDefinition;
	frameworks?: Framework[];
}

interface SkillCategory {
	title: string;
	skills: Skill[];
}

const skillCategories: SkillCategory[] = [
	{
		title: "Languages & Frameworks",
		skills: [
			{
				icon: faPython,
				name: "Python",
				frameworks: [
					{icon: faCircleCheck, name: "FastAPI"},
					{icon: faCircleCheck, name: "Django"},
					{icon: faCircleCheck, name: "Django REST Framework"},
					{icon: faCircleCheck, name: "SQLAlchemy"},
					{icon: faCircleCheck, name: "Beanie"},
				]
			},
			{
				icon: faPhp,
				name: "PHP",
				frameworks: [
					{icon: faSymfony, name: "Symfony"},
					{icon: faLaravel, name: "Laravel"},
				]
			},
			{
				icon: faJsSquare,
				name: "TypeScript / JavaScript",
				frameworks: [
					{icon: faReact, name: "React"},
					{icon: faAngular, name: "Angular"},
					{icon: faNodeJs, name: "Node"},
					{icon: faCircleCheck, name: "Next"},
				]
			},
			{
				icon: faJava,
				name: "Java",
				frameworks: [
					{icon: faCircleCheck, name: "Spring Boot"},
				]
			},
		]
	},
	{
		title: "Databases",
		skills: [
			{icon: faDatabase, name: "MySQL"},
			{icon: faDatabase, name: "PostgreSQL"},
			{icon: faDatabase, name: "MongoDB"},
		]
	},
];

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
	<>Infrastructure and workers (<span className="italic"> Docker, Jenkins, Github Actions, Redis </span>)</>,
	<>Monitoring (<span className="italic"> Datadog, Sentry </span>)</>,
	<>Workflow (<span className="italic"> Github, Jira, Figma </span>)</>,
];

const SkillList: React.FC<{ skills: Skill[] }> = ({skills}) => (
	<div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
		{skills.map((skill, index) => (
			<div key={index} style={{display: 'flex', flexDirection: 'column'}}>
				<Span style={{fontWeight: 'bold', textDecoration: 'underline', marginBottom: '5px', marginLeft: '30px'}}>
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
);

const DatabaseList: React.FC<{ skills: Skill[] }> = ({skills}) => (
	<RowColumnFlex style={{marginLeft: '20px', flexWrap: 'wrap', gap: '10px'}}>
		{skills.map((skill, index) => (
			<Span key={index}>
				<FontAwesomeIcon icon={skill.icon}/> {skill.name}
			</Span>
		))}
	</RowColumnFlex>
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

				{skillCategories.map((category, index) => (
					<React.Fragment key={index}>
						<PageSubheaderLeft>{category.title}</PageSubheaderLeft>
						{category.title === 'Databases' ? <DatabaseList skills={category.skills}/> : <SkillList skills={category.skills}/>}
					</React.Fragment>
				))}

				<TextSection
					title="Knowledge / Experience"
					content={broaderSkills}
				/>

				<TextSection
					title="Additional Tools"
					content={tools}
				/>

			</Content>
		</Container>
	);
}
