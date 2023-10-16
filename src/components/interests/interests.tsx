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
							I'm a lifelong Mainer, having graduated from Maine schools, with valuable experience from some of Maine's best companies.
							<br/><br/>
							I currently live in southern Maine with my wife and our pit mix Lila.
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
							When I'm not creating/breaking/fixing code, I'm creating/breaking/fixing something in my house. I guess it's what I like to do.
							<br/><br/>
							Or maybe I'm in the basement, turning up my VTM 60 and making my tinnitus worse than it already is.
							<br/><br/>
							But if it's summer, you'll find us at the beach!
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
