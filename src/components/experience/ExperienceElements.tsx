import styled from "styled-components";

export const ExperienceContainer = styled.div`
  h1 {
  		text-align: center;
  	}
`;

export const ExperienceListContainer = styled.div`
  	text-align: left;
  	justify-content: center;
`;

export const ExperienceContent = styled.div`
	color: ${props => props.theme['text']};;
	font-size: 1.5rem;
`;

export const ExperienceList = styled.ul`
	list-style: none;
	text-align: left;
	padding: 0px 55px;
	@media (max-width: 680px) {
		padding: 0;
	}
`;

export const ExperienceListItem = styled.li`
	margin-bottom: 1.5rem;
	font-size: 1.1rem;
`;