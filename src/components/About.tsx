import React from "react";
import { Container, Content, Image, ImageContainer, SideBySideContainer } from "@elements/Elements";

export function About() {
	return (
		<Container id={"about"} className={"fade-in scroll-into-margin"}>
			<Content>
				<SideBySideContainer>
					<div>
						I'm a lifelong Mainer, having graduated from Maine schools, with valuable experience from some of Maine's
						best companies.
						<br/>
						<br/>
						I currently live in southern Maine with my wife and our two pit bulls- Lila & Lou.
					</div>
					<ImageContainer>
						<Image src="/images/doog1.jpg"/>
					</ImageContainer>
				</SideBySideContainer>
			</Content>

			<Content>
				<SideBySideContainer>
					<ImageContainer>
						<Image src="/images/newy.jpg"/>
					</ImageContainer>
					<div>
						When I'm not creating/breaking/fixing code, I'm creating/breaking/fixing something in my house. I guess it's
						what I like to do.
						<br/>
						<br/>
						Or maybe I'm in the basement, turning up my VTM 60 and making my tinnitus worse than it already is.
						<br/>
						<br/>
						But if it's summer, you'll find us at the beach!
					</div>
				</SideBySideContainer>
			</Content>
		</Container>
	);
}
