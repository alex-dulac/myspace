import React from "react";

import { Container, Content, ListItem, UnorderedList } from "@elements/Elements";

export function Experience() {
	const experiences = [
		"I'm a dynamic software developer with over six years of professional experience, excelling in both backend and frontend development.",
		"My expertise includes PHP and Python, with a strong focus on Laravel & Symfony, and FastAPI & Django frameworks, respectively.",
		"On the client side, my skills shine with React, Angular, TypeScript, and state management with Redux/NgRx.",
		"I adeptly handle deployment and application monitoring using AWS, Datadog, and Sentry.",
		"I'm also proficient in working with various databases, such as MySQL, PostgreSQL, and MongoDB.",
		"My well-rounded skill set and passion for problem-solving make me an invaluable collaborator in any tech team."
	];

	return (
		<Container id={"experience"} className={"fade-in scroll-into-margin"}>
			<Content>
				<h1 className={"sub-header mb-2 text"}>Experience</h1>
				<UnorderedList className={"mb-2"}>
					{experiences.map((experience, index) => (
						<ListItem key={index}>{experience}</ListItem>
					))}
				</UnorderedList>
			</Content>
		</Container>
	);
}
