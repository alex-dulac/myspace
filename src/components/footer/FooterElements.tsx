import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
`;

export const FooterNav = styled.nav`
  background: ${props => props.theme['panel-background']};
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  max-width: 1100px;
  top: 0;
  font-size: 1.2em;
  z-index: 999;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
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
  height: 4em;
`;

export const NavLink = styled.a`
  color: ${props => props.theme['navy-text']};
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
`;
