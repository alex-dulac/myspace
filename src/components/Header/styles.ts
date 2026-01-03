import styled from "styled-components";
import { NavLink } from "@styles/nav-styles.ts";

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
    padding: 0 ${props => props.theme.spacing.small};
    font-size: ${props => props.theme.fontSizes.small};
    margin-bottom: ${props => props.theme.spacing.small};
`;

export const MobileNavMenuIcon = styled.div`
    font-size: 1.75rem;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 ${props => props.theme.spacing.small};
    margin-bottom: ${props => props.theme.spacing.small};
    cursor: pointer;

    svg {
        cursor: pointer;
        text-decoration: none;
        color: ${props => props.theme.colors.textPrimary};
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
    font-size: ${props => props.theme.fontSizes.xlarge};
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