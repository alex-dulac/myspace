import React from "react";
import {
	SkillsContainer,
	SkillsEducationContainer,
	SkillsList,
	SkillListItem,
	EducationItem,
	SkillsContent, Education,
} from "./skills-elements";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faDatabase} from '@fortawesome/free-solid-svg-icons';
import {
	faPhp, faJsSquare, faAngular, faReact, faPython, faHtml5, faCss3, faJava
} from '@fortawesome/free-brands-svg-icons';

export function Skills() {
	return (
		<SkillsEducationContainer className={"fade-in"}>
			<SkillsContainer>
				<h1 className={"sub-header mb-2 purple-text"}>Skills</h1>
				<SkillsContent>
					<SkillsList>
						<SkillListItem>
							<FontAwesomeIcon icon={faPhp}/><span>PHP</span>
						</SkillListItem>
						<SkillListItem>
							<FontAwesomeIcon icon={faAngular}/><span>Angular</span>
						</SkillListItem>
						<SkillListItem>
							<FontAwesomeIcon icon={faCheck}/><span>TypeScript</span>
						</SkillListItem>
						<SkillListItem>
							<FontAwesomeIcon icon={faJsSquare}/><span>JavaScript</span>
						</SkillListItem>
						<SkillListItem>
							<FontAwesomeIcon icon={faDatabase}/><span>SQL</span>
						</SkillListItem>
						<SkillListItem>
							<FontAwesomeIcon icon={faJava}/><span>Java</span>
						</SkillListItem>
						<SkillListItem>
							<FontAwesomeIcon icon={faReact}/><span>React</span>
						</SkillListItem>
						<SkillListItem>
							<FontAwesomeIcon icon={faPython}/><span>Python</span>
						</SkillListItem>
						<SkillListItem>
							<FontAwesomeIcon icon={faHtml5}/><span>HTML</span>
						</SkillListItem>
						<SkillListItem>
							<FontAwesomeIcon icon={faCss3}/><span>CSS</span>
						</SkillListItem>
					</SkillsList>
					{/*<Education>
						<EducationItem>
							<h2 className={"page-content teal-text"}>University of Southern Maine</h2>
							<span className={"page-content"}>Bachelor of Arts</span>
							<span className={"mb-1"}>Class of 2014</span>
							<span className={"italic"}>Communication Major<br/>Marketing Minor</span>
						</EducationItem>
					</Education>*/}
				</SkillsContent>
			</SkillsContainer>
		</SkillsEducationContainer>
	);
}
