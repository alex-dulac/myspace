import styled from "styled-components";

export const UnorderedList = styled.ul`
    text-align: left;
    padding: 0 55px;
    margin-bottom: ${props => props.theme.spacing.medium};

    @media (max-width: 680px) {
        padding: 0;
    }
`;

export const ListItem = styled.li`
    margin-bottom: 1.5rem;
    font-size: ${props => props.theme.fontSizes.large};
`;