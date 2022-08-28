import styled from "styled-components";

export const SkillsEducationContainer = styled.div`
  	color: ${props => props.theme['navy-text']};;
	font-size: 1.6rem;
	width: 1100px;
`;

export const SkillsContainer = styled.div`
  	h1 {
  		text-align: center;
  	}
`;

export const SkillsList = styled.ul`
	list-style: none;
	text-align: left;
`;

export const SkillListItem = styled.li`
	margin-bottom: 0.8rem;
	font-size: 1.5rem;
	span {
		padding-left: 10px;
	}
`;

export const EducationItem = styled.div`
	margin-bottom: 4rem;
`;

export const SkillsContent = styled.div`
	font-size: 1.2rem;
	display: flex;
	flex-direction: row !important;
	justify-content: space-between;
	text-align: left;
	margin-bottom: 2rem;
`;

export const Education = styled.div`
	flex-shrink: 0;
	text-align: right;
	font-size: 0.9rem;
`;
