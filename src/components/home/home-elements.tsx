import styled from "styled-components";

export const HomeContainer = styled.div`
  	width: 1100px;
`;

export const HomeContentContainer = styled.div`
  	text-align: center;
  	justify-content: center;
`;

export const ProfileImageContainer = styled.div`
  	justify-content: space-around;
  	align-items: center;
  	padding: 20px;
`;

export const ProfileImage = styled.img`
	border-radius: 50% !important;
	max-width: 25rem;
    max-height: 25rem;
`;

export const HomeContent = styled.div`
	color: ${props => props.theme['navy-text']};;
	font-size: 1.6rem;
	flex-direction: row !important;
`;

export const HomeItem = styled.div`
    padding: 19px;
`;
