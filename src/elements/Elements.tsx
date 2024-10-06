import styled from "styled-components";

interface IProps {
  isMobile: boolean;
}

export const Container = styled.div<IProps>`
	width: 100%;
	color: ${props => props.theme['text']};
	display: flex;
  font-size: ${props => (props.isMobile ? '1rem' : '1.2rem')};
 	
  h1 {
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 1rem;
`;

export const H1 = styled.h1`
  font-size: 4rem;
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

export const ImageContainer = styled.div`
    justify-content: space-around;
    align-items: center;
    padding: 20px;
`;

export const Image = styled.img<IProps>`
    max-width: ${props => (props.isMobile ? '13rem' : '25rem')};
    max-height: ${props => (props.isMobile ? '13rem' : '25rem')};
`;