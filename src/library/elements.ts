import styled from "styled-components";

/***** LAYOUT *****/
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
    background: ${props => props.theme.colors.primary};
    max-width: 1100px;
    width: 100%;
    min-height: 760px;
    border-radius: 20px;
    box-sizing: border-box;
    margin-bottom: 3rem;
`;

/***** PAGES *****/
export const Container = styled.div`
	width: 100%;
	color: ${props => props.theme.colors.quinary};
	display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.xlarge};
  animation: fade 0.9s ease-in;
  padding: 2rem;
  scroll-margin-top: 100px;

  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const PageHeader = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: ${props => props.theme.colors.quinary};
`;

export const RowColumnFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PageSubheaderLeft = styled.h3`
  color: ${props => props.theme.colors.quaternary};
  text-align: left;
  margin-bottom: 1rem;
`;

export const PageSubheaderCenter = styled.h3`
  color: ${props => props.theme.colors.quaternary};
  text-align: center;
  margin-bottom: 1rem;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  padding: 10px;
  
  svg {
    margin-right: 5px;
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

export const UnorderedList = styled.ul`
	text-align: left;
	padding: 0 55px;
    margin-bottom: 2rem;
  
	@media (max-width: 680px) {
		padding: 0;
	}
`;

export const ListItem = styled.li`
	margin-bottom: 1.5rem;
	font-size: ${props => props.theme.fontSizes.large};
`;

export const Link = styled.a`
`;

/***** NAVIGATION *****/
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    width: 100%;
    padding: 0 3.5rem 0 3.5rem;
    z-index: 1;
`;

export const NavUnorderedList = styled.ul`
    display: flex;
    align-items: center;
`;

export const NavLink = styled.a`
    color: ${props => props.theme.colors.quinary};
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 3.6em;
    padding: 0 1rem;
    font-weight: bold;
    outline : none;
`;

/***** HEADER *****/
interface HeaderContainerProps {
  showAll: boolean;
  isScrollingDown: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  z-index: 100;
  transition: top 0.3s;
  margin-bottom: 3rem;

  ${({ showAll }) =>
  showAll &&
    `
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  `}

  ${({ isScrollingDown }) =>
    isScrollingDown &&
    `
    top: -5rem;
  `}
`;

export const HeaderNav = styled.nav`
    background: ${props => props.theme.colors.primary};
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    top: 0;
    font-size: 1.2em;
    z-index: 99;
    box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
    position: relative;
`;

export const ShowAllToggle = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  font-size: ${props => props.theme.fontSizes.small};
  margin-bottom: 1rem;
`;

/***** FOOTER *****/
export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
`;

export const FooterNav = styled.nav`
  background: ${props => props.theme.colors.primary};
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  max-width: 1100px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  top: 0;
  font-size: 1.2em;
  z-index: 999;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
`;

export const FooterText = styled.h3`
  color: ${props => props.theme.colors.quaternary};
  display: flex;
  align-items: center;
`;

/***** Contact *****/
export const EmailSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const EmailReceived = styled.section`
  padding: 20px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const EmailForm = styled.form`
  text-align: left;
  padding: 20px;
`;

export const ContactInput = styled.input`
  border-radius: 15px;
  border-color: ${props => props.theme.colors.quinary};
  margin-bottom: 2rem;
`;

export const ContactTextarea = styled.textarea`
  border-radius: 15px;
  border-color: ${props => props.theme.colors.quinary};
  margin-bottom: 2rem;
  padding: 10px;
  height: 100px;
`;

export const ContactSubmit = styled.button`
  border: none;
  background: none;
  color: ${props => props.theme.colors.quinary};
  font-size: ${props => props.theme.fontSizes.xlarge};
  cursor: pointer;
  transition: all 0.3s ease;
`;

/***** MOBILE *****/
export const MobileNavMenuIcon = styled.div`
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  
  svg {
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.colors.quinary};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

interface MobileNavMenuProps {
  isOpen: boolean;
}

export const MobileNavMenu = styled.div<MobileNavMenuProps>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.secondary};
  border-top: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(${props => props.isOpen ? '0' : '-100%'});
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  max-height: 70vh;
  overflow-y: auto;
`;

export const MobileList = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
  
  ${NavLink} {
    display: block;
    padding: 12px 0;
    border-bottom: 1px solid ${props => props.theme.colors.secondary}20;
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      background-color: ${props => props.theme.colors.secondary}10;
      padding-left: 10px;
      transition: all 0.2s ease;
    }
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
	grid-template-columns: 1fr;  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: ${props => props.theme.colors.secondary}10;
  border-radius: 12px;
  border-left: 4px solid ${props => props.theme.colors.quaternary};
`;

export const SkillCategory = styled.h4`
  color: ${props => props.theme.colors.quaternary};
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.3rem;
  }
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const SkillTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.colors.quinary}15;
  border-radius: 20px;
  font-size: 0.95rem;
  white-space: nowrap;

  svg {
    font-size: 1rem;
  }
`;

export const SkillsSection = styled.section`
  width: 100%;
  margin-bottom: 3rem;
  text-align: left;
`;

export const SkillsDescriptionList = styled.ul`
  text-align: left;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 680px) {
    padding-left: 1rem;
  }
`;

export const SkillsDescriptionItem = styled.li`
  font-size: 1.1rem;
`;