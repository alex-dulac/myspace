import styled from "styled-components";

interface HeaderContainerProps {
    isSinglePage: boolean;
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

  ${({ isSinglePage }) =>
    isSinglePage &&
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
    background: ${props => props.theme['primary']};
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    top: 0;
    font-size: 1.2em;
    z-index: 99;
    box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 960px) {
        transition: 1.7s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    width: 100%;
    padding: 0 3.5rem 0 3.5rem;
    z-index: 1;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`;

export const NavItem = styled.li`
    height: 3.6em;
    a {
		color: ${props => props.theme['text']};
  		text-decoration: none;
  		cursor: pointer;
  	}
`;

export const NavLink = styled.a`
    color: ${props => props.theme['text']};
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    padding: 0 1rem;
    font-weight: bold;
    outline : none;
`;

export const MobileNavMenuIcon = styled.div`
    font-size: 1.75rem;
    padding-top: 20px;
    display: block;
`;

export const MobileNavMenu = styled.div`
    display: none;
    background-color: ${props => props.theme['primary']};
    border: 1px solid ${props => props.theme['tertiary']};
    font-size: 75%;
`;

export const MobileList = styled.ul`
	list-style: none;
	text-decoration: none;
	padding: 20px;
`;

export const MobileNavItem = styled.li`
    height: 1.5em;
    cursor: pointer;
`;
