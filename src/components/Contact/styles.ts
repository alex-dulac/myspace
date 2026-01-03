import styled from "styled-components";

export const EmailSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
`;

export const EmailReceived = styled.section`
    padding: 20px;
    margin: ${props => props.theme.spacing.medium} auto;
`;

export const EmailForm = styled.form`
    text-align: left;
    padding: 20px;
`;

export const ContactInput = styled.input`
    border-radius: 15px;
    border-color: ${props => props.theme.colors.textPrimary};
    margin-bottom: ${props => props.theme.spacing.medium};
    padding: 10px;
`;

export const ContactTextarea = styled.textarea`
    border-radius: 15px;
    border-color: ${props => props.theme.colors.textPrimary};
    padding: 10px;
    height: 100px;
`;

export const ContactSubmit = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${props => props.theme.spacing.xsmall};
    padding: ${props => props.theme.spacing.xsmall} ${props => props.theme.spacing.small};
		margin: ${props => props.theme.spacing.medium} 0;
    background: ${props => props.theme.colors.textPrimary}15;
    border: none;
    border-radius: 20px;
    color: ${props => props.theme.colors.textPrimary};
    font-size: ${props => props.theme.fontSizes.medium};
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
        background: ${props => props.theme.colors.textPrimary}25;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const SocialLinkPill = styled.a`
    display: inline-flex;
    align-items: center;
    gap: ${props => props.theme.spacing.xsmall};
    padding: ${props => props.theme.spacing.xsmall} ${props => props.theme.spacing.small};
    background: ${props => props.theme.colors.textPrimary}15;
    border-radius: 20px;
    font-size: ${props => props.theme.fontSizes.medium};
    white-space: nowrap;
    text-decoration: none;
    color: ${props => props.theme.colors.textPrimary};
    transition: all 0.3s ease;

    &:hover {
        background: ${props => props.theme.colors.textPrimary}25;
    }

    svg {
        font-size: ${props => props.theme.fontSizes.medium};
    }
`;

export const SocialLinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${props => props.theme.spacing.small};
    justify-content: center;
`;

export const ErrorMessage = styled.p`
	color: ${props => props.theme.colors.error};
	font-size: ${props => props.theme.fontSizes.medium};
`;