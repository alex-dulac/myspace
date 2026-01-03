import styled from "styled-components";
import { MOBILE_WIDTH } from "@hooks/useIsMobile.ts";

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

export const Container = styled.div`
    width: 100%;
    color: ${props => props.theme.colors.textPrimary};
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${props => props.theme.fontSizes.xlarge};
    animation: fade 0.9s ease-in;
    padding: ${props => props.theme.spacing.medium};
    scroll-margin-top: 100px;

    @media screen and (max-width: ${MOBILE_WIDTH}px) {
        font-size: ${props => props.theme.fontSizes.medium};
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: ${props => props.theme.spacing.small};
    width: 100%;
`;