import styled from "styled-components";

export const HeaderNav = styled.nav`
  background: ${props => props.theme['base-background']};
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 0;
  font-size: 1.2em;
  z-index: 999;
  @media screen and (max-width: 960px) {
    transition: 1.7s all ease;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  padding: 0 3.5rem 0 3.5rem;
  z-index: 1;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderItem = styled.li`
  height: 3.6em;
`;

export const HeaderNavLink = styled.a`
  color: ${props => props.theme['base-text']};
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  &:hover {
    border-bottom: 0.16em solid color: ${props => props.theme['base-text']};
  }
`;

export const HeaderTitle = styled.h3`
  color: ${props => props.theme['base-text']};
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
`;
