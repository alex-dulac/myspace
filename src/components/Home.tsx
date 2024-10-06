import React, {useContext} from "react";
import {MobileContext} from "../MobileContext";
import {Container, Content, H1, Image, ImageContainer} from "../elements/Elements";

export function Home() {
	const isMobile = useContext(MobileContext);

	return (
		<Container
			id={"home"}
			isMobile={isMobile}
			className={"fade-in scroll-into-margin"}
		>
			<Content>
				<H1 className={"mobile"}>ALEX DULAC</H1>
				<span className={"italic page-content"}>Full-Stack Developer</span>
				I am full-stack developer who is constantly seeking to improve myself and learn new technologies.
				<br/>
				<br/>
				I'm energized by work that allows me to troubleshoot issues, deliver solutions, and provide a great experience!
				<ImageContainer>
					<Image
						isMobile={isMobile}
						src="/profile2.png"
					/>
				</ImageContainer>
			</Content>
		</Container>
	);
}
