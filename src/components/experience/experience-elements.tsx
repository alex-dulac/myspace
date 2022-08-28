import styled from "styled-components";

export const ExperienceContainer = styled.div`
  
`;

export const ExperienceListContainer = styled.div`
  	text-align: left;
  	justify-content: center;
`;

export const ExperienceContent = styled.div`
	color: ${props => props.theme['navy-text']};;
	font-size: 1.5rem;
`;

export const ExperienceList = styled.ul`
	list-style: none;
	text-align: left;
	padding: 0px 55px;
`;

export const ExperienceListItem = styled.li`
	margin-bottom: 0.8rem;
	font-size: 1.1rem;
`;

export const HistoryContainer = styled.div`
  	text-align: right;
  	justify-content: center;
`;

export const HistoryItem = styled.div`
	font-size: 1.2rem;
	display: flex;
	flex-direction: row !important;
	justify-content: space-between;
	text-align: left;
	margin-bottom: 2rem;
`;

export const HistoryDetails = styled.div`
	font-size: 1.2rem;
	justify-content: space-between;
	flex-grow: 1;
	font-size: 0.9rem;
	ul {
		list-style: none;
	}
`;

export const HistoryTime = styled.div`
	flex-shrink: 0;
	text-align: right;
	font-size: 0.9rem;
`;

export const Resume = styled.div`
	display: inline-flex !important;
	flex-direction: row !important;
  	align-items: center;
  	text-align: center;
  	justify-content: center;
  	a {
  		color: ${props => props.theme['navy-text']};
  		text-decoration: none;
  		font-size: 1.1rem;
  	}
`;
