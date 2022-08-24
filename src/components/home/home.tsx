import React from "react";
import {HomeContainer, HomeContentContainer, HomeContent, ProfileImageContainer, ProfileImage} from "./home-elements";

export function Home() {
	return (
		<HomeContainer className={"fade-in"}>
			<HomeContentContainer>
				<h1 className={"page-header mb-1"}>
					<span className={"purple-text"}>ALEX </span>
					<span className={"teal-text"}>DULAC</span>
				</h1>
				<HomeContent>
					Full-Stack Software Developer
					<br/>Westbrook, ME
					<br/><br/>
					<span className={"sub-header magenta-text mb-1"}>Hello!</span>
					<br/><br/>
					I am full-stack software developer who is constantly seeking to improve myself and learn new technologies.
					<br/><br/>
					I'm energized by work that allows me to troubleshoot issues, deliver solutions, and provide a great experience.
				</HomeContent>
			</HomeContentContainer>
			<ProfileImageContainer>
				<ProfileImage src="/profile.jpeg"/>
			</ProfileImageContainer>
		</HomeContainer>
	);
}
