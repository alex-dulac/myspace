import React, {useContext} from "react";
import {
	HomeContainer, HomeContentContainer, HomeContent, HomeItem,
	ProfileImageContainer, ProfileImage,
	MobileProfileImage, MobileProfileImageContainer
} from "./HomeElements";
import {MobileContext} from "../../MobileContext";

export function Home() {
	const isMobile = useContext(MobileContext);

	return (
		<>
			<HomeContainer id={"home"} className={"fade-in scroll-into-margin"}>
				<HomeContentContainer>
					<h1 className={"page-header mb-minus mobile"}>
						<span className={"text"}>ALEX DULAC</span>
					</h1>
					<span className={"italic page-content"}>Full-Stack Developer</span>
					<br/><br/>
					<HomeContent>
						<HomeItem className={"summary"}>
							I am full-stack developer who is constantly seeking to improve myself and learn new technologies.
							<br/><br/>
							I'm energized by work that allows me to troubleshoot issues, deliver solutions, and provide a great experience!
						</HomeItem>
						{!isMobile ?
							<ProfileImageContainer>
								<ProfileImage src="/profile2.png"/>
							</ProfileImageContainer> : null
						}
					</HomeContent>
					{isMobile ?
						<MobileProfileImageContainer>
							<MobileProfileImage src="/profile2.png"/>
						</MobileProfileImageContainer> : null
					}
				</HomeContentContainer>
			</HomeContainer>
		</>
	);
}
