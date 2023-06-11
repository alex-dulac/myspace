import React from "react";
import {
	HomeContainer,
	HomeContentContainer,
	HomeContent,
	ProfileImageContainer,
	ProfileImage, HomeItem, MobileProfileImage
} from "./home-elements";

export function Home() {
	return (
		<HomeContainer className={"fade-in"}>
			<HomeContentContainer>
				<h1 className={"page-header mb-minus mobile"}>
					<span className={"purple-text"}>ALEX </span>
					<span className={"teal-text"}>DULAC</span>
				</h1>
				<span className={"italic page-content"}>Full-Stack Software Developer</span>
				<br/><br/>
				<span className={"hello magenta-text mb-1"}>Hello!</span>
				<HomeContent>
					<HomeItem className={"summary"}>
						I am full-stack software developer who is constantly seeking to improve myself and learn new technologies.
						<br/><br/>
						I'm energized by work that allows me to troubleshoot issues, deliver solutions, and provide a great experience!
					</HomeItem>
					<ProfileImageContainer>
						<ProfileImage src="/profile.jpeg"/>
					</ProfileImageContainer>
				</HomeContent>
				<ProfileImageContainer>
					<MobileProfileImage src="/profile.jpeg"/>
				</ProfileImageContainer>
			</HomeContentContainer>
		</HomeContainer>
	);
}
