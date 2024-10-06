import styled from "styled-components";

interface ContainerProps {
  isMobile: boolean;
}

export const Container = styled.div<ContainerProps>`
	width: 100%;
	color: ${props => props.theme['text']};
	display: flex;
  font-size: ${props => (props.isMobile ? '1rem' : '1.2rem')};
 	
  h1 {
    text-align: center;
  }
`;

export const Content = styled.div`
	margin-bottom: 2rem;
  text-align: center;
  justify-content: center;
`;

export const GeneralDetail = styled.div`
	@media screen and (min-width: 0px) and (max-width: 768px) {
		flex-direction: column;
	}
 
 	@media screen and (min-width: 768px) and (max-width: 3000px) {
 		flex-direction: row !important;
 	}
`;

export const GeneralType = styled.div`
	text-align: left;
	text-decoration: underline;
`;

export const GeneralListItem = styled.span`
	padding: 10px;
	a {
		color: ${props => props.theme['text']};
  		text-decoration: none;
  	}
`;
