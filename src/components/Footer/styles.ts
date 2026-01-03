import styled from "styled-components";

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
    color: ${props => props.theme.colors.textSecondary};
    display: flex;
    align-items: center;
`;