import React, {useContext} from "react";
import {MobileContext} from "../MobileContext";
import {Container, Content, Image, ImageContainer} from "../elements/Elements";

export function About() {
	const isMobile = useContext(MobileContext);

	return (
		<Container
			id={"about"}
			isMobile={isMobile}
			className={"fade-in scroll-into-margin"}
		>
			<Content>
				I'm a lifelong Mainer, having graduated from Maine schools, with valuable experience from some of Maine's best companies.
				<br/>
				<br/>
				I currently live in southern Maine with my wife and our two pit bulls- Lila & Lou.
				<ImageContainer>
					<Image
						isMobile={isMobile}
						src="/doog1.jpg"
					/>
				</ImageContainer>
			</Content>

			<Content>
				<ImageContainer>
					<Image
						isMobile={isMobile}
						src="/newy.jpg"
					/>
				</ImageContainer>
				When I'm not creating/breaking/fixing code, I'm creating/breaking/fixing something in my house. I guess it's what I like to do.
				<br/><br/>
				Or maybe I'm in the basement, turning up my VTM 60 and making my tinnitus worse than it already is.
				<br/><br/>
				But if it's summer, you'll find us at the beach!
			</Content>
		</Container>
	);
}
