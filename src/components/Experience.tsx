import React from "react";

import {Container, Content, ListItem, PageSubheaderCenter, UnorderedList} from "@library/elements";

export function Experience() {
	const experiences = [
		"I'm a dynamic software developer with over six years of professional experience, excelling in both backend and frontend cloud application development.",
		"My expertise includes Python, with a strong focus on FastAPI & Django frameworks, and PHP, primarily utilizing Laravel and Symfony.",
		"On the client side, my skills shine with React, Angular, TypeScript, and state management with Redux/NgRx.",
		"I adeptly handle deployment and application monitoring using AWS, Datadog, and Sentry.",
		"I'm also proficient in working with various databases, such as MySQL, PostgreSQL, and MongoDB.",
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
