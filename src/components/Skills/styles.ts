import styled from "styled-components";
import { MOBILE_WIDTH } from "@hooks/useIsMobile.ts";

export const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.medium};
    width: 100%;
    margin-bottom: ${props => props.theme.spacing.medium};

    @media screen and (max-width: ${MOBILE_WIDTH}px) {
        gap: ${props => props.theme.spacing.small};
    }
`;

export const SkillCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.small};
    padding: ${props => props.theme.spacing.medium};
    background: ${props => props.theme.colors.secondary}10;
    border-radius: 12px;
    border-left: 4px solid ${props => props.theme.colors.textSecondary};
`;

export const SkillCategory = styled.h4`
    color: ${props => props.theme.colors.textSecondary};
    font-size: ${props => props.theme.fontSizes.xlarge};
    font-weight: bold;
    margin: 0;
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.xsmall};

    svg {
        font-size: ${props => props.theme.fontSizes.xlarge};
    }
`;

export const SkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${props => props.theme.spacing.small};
`;

export const SkillTag = styled.span`
    display: inline-flex;
    align-items: center;
    gap: ${props => props.theme.spacing.xsmall};
    padding: ${props => props.theme.spacing.xsmall} ${props => props.theme.spacing.small};
    background: ${props => props.theme.colors.textPrimary}15;
    border-radius: 20px;
    font-size: ${props => props.theme.fontSizes.medium};
    white-space: nowrap;

    svg {
        font-size: ${props => props.theme.fontSizes.medium};
    }
`;

export const SkillsSection = styled.section`
    width: 100%;
    margin-bottom: ${props => props.theme.spacing.large};
    text-align: left;
`;

export const SkillsDescriptionList = styled.ul`
    text-align: left;
    padding-left: ${props => props.theme.spacing.medium};;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.small};

    @media (max-width: 680px) {
        padding-left: ${props => props.theme.spacing.small};
    }
`;

export const SkillsDescriptionItem = styled.li`
    font-size: ${props => props.theme.fontSizes.large};
`;