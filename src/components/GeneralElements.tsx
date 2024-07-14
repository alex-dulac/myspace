import styled from "styled-components";

export const GeneralContainer = styled.div`
	width: 100%;
	color: ${props => props.theme['navy-text']};
	display: flex;
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
 	
  	h1 {
  		text-align: center;
  	}
`;

export const GeneralContent = styled.div`
	margin-bottom: 2rem;
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
		color: ${props => props.theme['navy-text']};
  		text-decoration: none;
  	}
`;
