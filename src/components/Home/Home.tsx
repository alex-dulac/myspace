import { Image, ImageContainer, RowColumnFlex, PageSubheaderCenter } from "@styles/shared-styles.ts";
import { HomeTitle } from "@components/Home/styles.ts";

export function Home() {
	return (
		<>
			<HomeTitle>
				ALEX DULAC
			</HomeTitle>
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
		</>
	);
}
