import styled from "styled-components";
import { MOBILE_WIDTH } from "@hooks/useIsMobile.ts";

export const RowColumnFlex = styled.div`
		// 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${props => props.theme.spacing.small};

    @media screen and (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
    }
`;

export const PageSubheaderLeft = styled.h3`
    color: ${props => props.theme.colors.textSecondary};
    text-align: left;
    margin-bottom: ${props => props.theme.spacing.small};
`;

export const PageSubheaderCenter = styled.h3`
    color: ${props => props.theme.colors.textSecondary};
    text-align: center;
    margin-bottom: ${props => props.theme.spacing.small};
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${props => props.theme.spacing.medium};
    padding: 20px;

    @media screen and (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
    }
`;

export const Image = styled.img`
    max-width: 25rem;
    max-height: 25rem;

    @media screen and (max-width: ${MOBILE_WIDTH}px) {
        max-width: 13rem;
        max-height: 13rem;
    }
`;

export const Link = styled.a`
	font-weight: bold;
`;

export const BoldSpan = styled.span`
	font-weight: bold;
`;
