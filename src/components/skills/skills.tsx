import React from "react";
import {
	SkillsContainer, SkillsContentContainer, SkillsContent, SkillsList
} from "./skills-elements";

export function Skills() {
	return (
		<SkillsContainer className={"fade-in"}>
			<SkillsContentContainer>
				<h1 className={"page-header"}>
					<span className={"purple-text"}>Skills & Education</span>
				</h1>
				<SkillsContent className={"navy-text page-content"}>
					Yes yes ya'll
				</SkillsContent>
			</SkillsContentContainer>
		</SkillsContainer>
	);
}
