import React from "react";

import {Container, Content, ListItem, PageSubheaderCenter, UnorderedList} from "@library/elements";

export function Experience() {
	const experiences = [
		"I'm a dynamic software developer with seven years of professional experience, excelling in both backend and frontend cloud-based application development.",
		"My expertise includes Python, with a strong focus on FastAPI & Django frameworks, and PHP, primarily utilizing Laravel and Symfony.",
		"On the client side, my skills shine with React, Angular, TypeScript, and state management with Redux/NgRx.",
		"I'm also proficient in working with various databases, such as MySQL, PostgreSQL, and MongoDB.",
		"I translate high-level business needs into technical specifications and deliverables, carrying out software development projects from conception to completion.",
		"My well-rounded skill set and passion for problem-solving make me an invaluable collaborator in any tech team."
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
