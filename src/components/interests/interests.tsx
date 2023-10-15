import React from "react";
import {
	HomeContainer,
	HomeContent,
	HomeContentContainer,
	HomeItem, MobileProfileImage, MobileProfileImageContainer,
	ProfileImage,
	ProfileImageContainer
} from "../home/home-elements";

export function Interests() {
	return (
		<>
			<HomeContainer id={"interests"} className={"fade-in scroll-into-margin"}>
				<HomeContentContainer>
					<HomeContent>
						<HomeItem className={"summary"}>
							I'm a (mostly) lifelong Mainer and couldn't be happier!
							<br/><br/>
							I live here with my wife and our pit mix Lila.
						</HomeItem>
						<ProfileImageContainer>
							<ProfileImage src="/doog1.jpg"/>
						</ProfileImageContainer>
					</HomeContent>
					<MobileProfileImageContainer>
						<MobileProfileImage src="/doog1.jpg"/>
					</MobileProfileImageContainer>
				</HomeContentContainer>
				<HomeContentContainer>
					<HomeContent>
						<ProfileImageContainer>
							<ProfileImage src="/doog2.jpg"/>
						</ProfileImageContainer>
						<HomeItem className={"summary"}>
							When I'm not breaking/fixing code, I'm breaking/fixing something in my house while calling it home improvement.
							<br/><br/>
							Or maybe I'm in the basement, turning up my VTM 60 and making my tinnitus worse than it already is.
							<br/><br/>
							Otherwise, you'll find me on my motorcycle headed to the beach in the summer!
						</HomeItem>
					</HomeContent>
					<MobileProfileImageContainer>
						<MobileProfileImage src="/doog2.jpg"/>
					</MobileProfileImageContainer>
				</HomeContentContainer>
			</HomeContainer>
		</>
	);
}
