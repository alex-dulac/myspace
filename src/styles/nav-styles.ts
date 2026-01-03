import styled from "styled-components";

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
    color: ${props => props.theme.colors.textPrimary};
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 3.6em;
    padding: 0 ${props => props.theme.spacing.small};
    font-weight: bold;
    outline: none;
`;