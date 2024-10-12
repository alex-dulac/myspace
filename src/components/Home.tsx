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
					Full Stack Software Developer
				</PageSubheaderCenter>
				<RowColumnFlex>
					<div>
						I am software developer who is constantly seeking to improve myself and learn new technologies.
						<br/>
						<br/>
						I'm energized by work that allows me to troubleshoot issues, deliver solutions, and provide a great
						experience!
					</div>
					<ImageContainer>
						<Image src="/images/profile2.png"/>
					</ImageContainer>
				</RowColumnFlex>
			</Content>
		</Container>
	);
}
