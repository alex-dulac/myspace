import styled from "styled-components";

export const ContactContainer = styled.div`
	color: ${props => props.theme['navy-text']};
	font-size: 1.6rem;
  	width: 1100px;
`;

export const Header = styled.h1`
	text-align: left;
	color: #47267a;
	margin-bottom: 50px;
`;

export const ContactContentContainer = styled.div`
  	text-align: center;
  	justify-content: center;
`;

export const ContactContent = styled.div`
	color: ${props => props.theme['navy-text']};
	font-size: 1.6rem;
`;

export const ContactListContainer = styled.ul`
	width: 970px;
`;

export const ContactList = styled.ul`
	display: inline-block;
	list-style: none;
	text-align: left;
`;

export const ContactListItem = styled.li`
	margin-bottom: 0.8rem;
	font-size: 2rem;
	a {
		color: ${props => props.theme['navy-text']};
  		text-decoration: none;
  	}
`;
