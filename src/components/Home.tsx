import React from "react";
import {
	Container,
	Content,
	PageHeader,
	Image,
	ImageContainer,
	RowColumnFlex,
	PageSubheaderCenter
} from "@library/elements";

export function Home() {
	return (
		<Container id={"home"}>
			<Content>
				<PageHeader>
					ALEX DULAC
				</PageHeader>
				<PageSubheaderCenter className={"italic"}>
					Full Stack Software Engineer
				</PageSubheaderCenter>
				<RowColumnFlex>
					<div>
						<p> I am a problem solver who is constantly seeking to improve myself and learn new technologies. </p>
						<p> I'm energized by work that allows me to troubleshoot issues, deliver solutions, and provide a great experience! </p>
					</div>
					<ImageContainer>
						<Image src="/images/profile.jpeg"/>
					</ImageContainer>
				</RowColumnFlex>
			</Content>
		</Container>
	);
}
