import styled from "styled-components";

export const SkillsContainer = styled.div`
	width: 100%;
	color: ${props => props.theme['navy-text']};
	display: flex;
	
	
	@media screen and (min-width: 0px) and (max-width: 768px) {
		font-size: 1.2rem;
	}
 
 	@media screen and (min-width: 768px) and (max-width: 3000px) {
 		font-size: 1.4rem;
 	}
 	
  	h1 {
  		text-align: center;
  	}
`;

export const SkillsContent = styled.div`
	margin-bottom: 2rem;
`;

export const SkillsDetail = styled.div`
	@media screen and (min-width: 0px) and (max-width: 768px) {
		flex-direction: column;
	}
 
 	@media screen and (min-width: 768px) and (max-width: 3000px) {
 		flex-direction: row !important;
 	}
`;

export const SkillsType = styled.div`
	text-align: left;
	text-decoration: underline;
	
	
`;

export const SkillListItem = styled.span`
	padding: 10px;
`;
