import { Container, Content, ListItem, PageSubheaderCenter, UnorderedList } from "@library/elements";

export function Experience() {
	const experiences = [
		"Versatile software engineer with 7+ years of experience designing, building, and scaling cloud-based applications across backend and frontend systems.",
		"Specialized in modern frontend development using React, Angular, and Vue to create engaging, responsive user experiences.",
		"Skilled in Python (FastAPI, Django) and PHP (Laravel, Symfony), with a proven track record of delivering high-performance, reliable APIs and services.",
		"Experienced with relational and non-relational databases, including MySQL, PostgreSQL, and MongoDB, ensuring efficient data modeling and performance.",
		"Adept at translating complex business requirements into technical solutions and driving projects from architecture through production delivery.",
		"Recognized for problem-solving, adaptability, and collaboration, consistently contributing to high-impact engineering teams."
	];

	return (
		<Container id={"experience"}>
			<Content>
				<PageSubheaderCenter>Experience</PageSubheaderCenter>
				<UnorderedList>
					{experiences.map((experience, index) => (
						<ListItem key={index}>{experience}</ListItem>
					))}
				</UnorderedList>
			</Content>
		</Container>
	);
}
