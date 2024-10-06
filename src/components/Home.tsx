import React from "react";
import { Container, Content, H1, Image, ImageContainer, SideBySideContainer } from "@elements/Elements";

export function Home() {
	return (
		<Container id={"home"} className={"fade-in scroll-into-margin"}>
			<Content>
				<H1 className={"mobile"}>ALEX DULAC</H1>
				<span className={"italic"}>Full-Stack Developer</span>

				<SideBySideContainer>
					<div>
						I am full-stack developer who is constantly seeking to improve myself and learn new technologies.
						<br/>
						<br/>
						I'm energized by work that allows me to troubleshoot issues, deliver solutions, and provide a great
						experience!
					</div>

					<ImageContainer>
						<Image src="/images/profile2.png"/>
					</ImageContainer>
				</SideBySideContainer>
			</Content>
		</Container>
	);
}
