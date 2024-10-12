import React from "react";
import { Container, Content, Image, ImageContainer, RowColumnFlex } from "@library/elements";

export function About() {
	return (
		<Container id={"about"}>
			<Content>
				<RowColumnFlex>
					<div>
						I'm a lifelong Mainer, having graduated from Maine schools, with valuable experience from some of Maine's
						best companies.
						<br/>
						<br/>
						I currently live in southern Maine with my wife and our two pitbulls- Lila & Lou.
					</div>
					<ImageContainer>
						<Image src="/images/doog1.jpg"/>
					</ImageContainer>
				</RowColumnFlex>
			</Content>

			<Content>
				<RowColumnFlex>
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
				</RowColumnFlex>
			</Content>
		</Container>
	);
}
