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

export const MobileProfileImageContainer = styled.div`
    justify-content: space-around;
    align-items: center;
    padding: 20px;
`;

export const ProfileImage = styled.img`
    max-width: 25rem;
    max-height: 25rem;
`;

export const MobileProfileImage = styled.img`
    max-width: 13rem;
    max-height: 13rem;
`;

export const HomeContent = styled.div`
	color: ${props => props.theme['navy-text']};
	font-size: 1.6rem;
	flex-direction: row !important;
	justify-content: space-between;
	margin-bottom: 2rem;
	align-items: center;
`;

export const HomeItem = styled.div`
    padding: 19px;
`;
