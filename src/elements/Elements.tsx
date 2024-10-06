import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	color: ${props => props.theme['text']};
	display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
      font-size: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 1rem;
`;

export const H1 = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

export const SideBySideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
      flex-direction: column;
  }
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 20px;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  max-width: 25rem;
  max-height: 25rem;

  @media screen and (max-width: 768px) {
      max-width: 13rem;
      max-height: 13rem;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
`;

export const FooterNav = styled.nav`
  background: ${props => props.theme['primary']};
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  max-width: 1200px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  top: 0;
  font-size: 1.2em;
  z-index: 999;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
`;

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const PageContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PageContent = styled.section`
    flex: 1;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme['primary']};
    max-width: 1200px;
    width: 100%;
    min-height: 760px;
    border-radius: 20px;
    box-sizing: border-box;
    margin-bottom: 3rem;
`;

export const UnorderedList = styled.ul`
	list-style: none;
	text-align: left;
	padding: 0 55px;
	@media (max-width: 680px) {
		padding: 0;
	}
`;

export const ListItem = styled.li`
	margin-bottom: 1.5rem;
	font-size: 1.1rem;
`;