import React from "react";
import {
	ExperienceContainer, ExperienceListContainer, ExperienceContent, ExperienceList, ExperienceListItem
} from "./experience-elements";

export function Experience() {
	return (
		<ExperienceContainer id={"experience"} className={"fade-in scroll-into-margin"}>
			<ExperienceListContainer>
				<h1 className={"sub-header mb-2 purple-text"}>Experience</h1>
				<ExperienceContent className={"navy-text page-content"}>
					<ExperienceList className={"mb-2"}>
						<ExperienceListItem>
							I'm a dynamic software developer with over six years of professional experience, excelling in both backend and frontend development.
						</ExperienceListItem>
						<ExperienceListItem>
							My expertise includes PHP and Python, with a strong focus on Laravel & Symfony, and FastAPI & Django frameworks, respectively.
						</ExperienceListItem>
						<ExperienceListItem>
							On the client side, my skills shine with React, Angular, TypeScript, and state management with Redux/NgRx.
						</ExperienceListItem>
						<ExperienceListItem>
							I adeptly handle deployment and application monitoring using AWS, Datadog, and Sentry.
                        </ExperienceListItem>
						<ExperienceListItem>
							I'm also proficient in working with various databases, such as MySQL, PostgreSQL, and MongoDB.
                        </ExperienceListItem>
						<ExperienceListItem>
							My well-rounded skill set and passion for problem-solving make me an invaluable collaborator in any tech team.
						</ExperienceListItem>
					</ExperienceList>
				</ExperienceContent>
			</ExperienceListContainer>
		</ExperienceContainer>
	);
}
