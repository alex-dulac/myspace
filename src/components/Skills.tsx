import React from "react";
import {
	Container,
	Content,
	PageSubheaderLeft,
	SkillCard,
	SkillCategory,
	SkillsDescriptionItem,
	SkillsDescriptionList,
	SkillsGrid,
	SkillsList,
	SkillsSection,
	SkillTag
} from "@library/elements.ts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCircleCheck, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
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
	faVuejs, faSquareJs, faAws, faDocker, faGithub, faJenkins, faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';

const languagesAndFrameworks = [
	{
		icon: faPython,
		name: "Python",
		frameworks: [
			{ icon: faCircleCheck, name: "FastAPI" },
			{ icon: faCircleCheck, name: "Django"},
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
			{ icon: faVuejs, name: "Vue" },
			{ icon: faNodeJs, name: "Node" },
			{ icon: faCircleCheck, name: "Next" },
			{ icon: faSquareJs, name: "Express" },
		]
	},
	{
		icon: faPhp,
		name: "PHP",
		frameworks: [
			{ icon: faSymfony, name: "Symfony" },
			{ icon: faLaravel, name: "Laravel" },
			{ icon: faCircleCheck, name: "Doctrine" },
		]
	},
	{
		icon: faMicrosoft,
		name: "C#",
		frameworks: [
			{ icon: faCircleCheck, name: "ASP.NET Core Web APIs" },
		]
	},
	{
		icon: faJava,
		name: "Java",
		frameworks: [
			{ icon: faCircleCheck, name: "Spring Boot" },
		]
	},
	{
		icon: faDatabase,
		name: "Databases",
		frameworks: [
			{ icon: faDatabase, name: "MySQL" },
			{ icon: faDatabase, name: "PostgreSQL" },
			{ icon: faDatabase, name: "Microsoft SQL Server" },
			{ icon: faDatabase, name: "MongoDB" },
		]
	},
	{
		icon: faServer,
		name: "DevOps & Infrastructure",
		frameworks: [
			{ icon: faAws, name: "AWS" },
			{ icon: faDocker, name: "Docker" },
			{ icon: faCircleCheck, name: "Kubernetes" },
			{ icon: faGithub, name: "GitHub Actions" },
			{ icon: faCircleCheck, name: "Redis" },
			{ icon: faJenkins, name: "Jenkins" },
			{ icon: faChartBar, name: "DataDog" },
		]
	},
];

const broaderSkills = [
	"Object-oriented design and SOLID principles",
	<>RESTful and GraphQL API development with schema design and versioning</>,
	<>Advanced state management (<span className="italic">Redux, NgRx, Zustand, Pinia</span>)</>,
	"Relational database design and normalization",
	"Query optimization and performance tuning",
	"Expert-level debugging, profiling, and performance optimization",
	"Third-party API integrations and payment processing",
	<>Comprehensive testing strategies (<span className="italic">unit, integration, e2e</span>)</>,
	<>Development workflow and collaboration tools (<span className="italic">GitHub, Jira, Confluence, Figma</span>)</>,
];

const LanguageCard: React.FC<{ skill: typeof languagesAndFrameworks[0] }> = ({ skill }) => (
	<SkillCard>
		<SkillCategory>
			<FontAwesomeIcon icon={skill.icon} /> {skill.name}
		</SkillCategory>
		<SkillsList>
			{skill.frameworks.map((framework, index) => (
				<SkillTag key={index}>
					<FontAwesomeIcon icon={framework.icon} /> {framework.name}
				</SkillTag>
			))}
		</SkillsList>
	</SkillCard>
);

const DescriptionSection: React.FC<{ title: string; items: React.ReactNode[] }> = ({ title, items }) => (
	<SkillsSection>
		<PageSubheaderLeft>{title}</PageSubheaderLeft>
		<SkillsDescriptionList>
			{items.map((item, index) => (
				<SkillsDescriptionItem key={index}>{item}</SkillsDescriptionItem>
			))}
		</SkillsDescriptionList>
	</SkillsSection>
);

export function Skills() {
	return (
		<Container id={"skills"}>
			<Content>
				<SkillsSection>
					<PageSubheaderLeft>Languages & Frameworks</PageSubheaderLeft>
					<SkillsGrid>
						{languagesAndFrameworks.map((skill, index) => (
							<LanguageCard key={index} skill={skill} />
						))}
					</SkillsGrid>
				</SkillsSection>

				<DescriptionSection title="Additional Skills" items={broaderSkills} />
			</Content>
		</Container>
	);
}
