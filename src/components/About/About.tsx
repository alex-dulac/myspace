import { useContext, useMemo } from "react";
import { BoldSpan, Image, ImageContainer, Link, RowColumnFlex } from "@styles/shared-styles.ts";
import { ImageCarousel } from "@components/ImageCarousel/ImageCarousel.tsx";
import { MobileContext } from "@hooks/useIsMobile.ts";
import { shuffledDogImages } from "@library/utils.ts";
import { github, lastFm } from "@library/links.ts";


function IntroSection({ isMobile, firstCollectionImages }: { isMobile: boolean; firstCollectionImages: string[] }) {
	return (
		<RowColumnFlex>
			<div>
				<p>
					I'm a lifelong Mainer, and currently live in southern Maine with my wife and our two pitbulls- Lila & Lou.
				</p>
				<p>
					When I'm not developing software, I like to stay creatively and analytically engaged in a few other ways:
				</p>
			</div>
			{isMobile ? (
				<ImageContainer>
					<Image src="/images/dogs/01_dog.jpg"/>
				</ImageContainer>
			) : (
				<ImageCarousel images={firstCollectionImages} />
			)}
		</RowColumnFlex>
	);
}

function InterestsSection({ isMobile, secondCollectionImages }: { isMobile: boolean; secondCollectionImages: string[] }) {
	const lastFmLink = <Link href={lastFm.url} target="_blank"> Last.fm</Link>;
	const scrobblerLink = <Link href={github.url + '/py-scrobbler'} target="_blank"> my own tooling</Link>;

	return (
		<RowColumnFlex>
			{isMobile ? (
				<ImageContainer>
					<Image src="/images/dogs/02_dog.jpg"/>
				</ImageContainer>
			) : (
				<ImageCarousel images={secondCollectionImages} />
			)}
			<div>
				<p>
					<BoldSpan>Lifelong Musician</BoldSpan> – I've played in bands for years, and while
					I no longer play out, music remains a key creative outlet for me. These days,
					it's more about personal projects and continuous learning.
				</p>
				<p>
					<BoldSpan>Amateur Archivist</BoldSpan> – I log all the music I listen to on {lastFmLink},
					because I love seeing how my listening taste and habits evolve over time. I also enjoy experimenting
					with {scrobblerLink} to process and analyze my data.
				</p>
				<p>
					<BoldSpan>Sports Enthusiast</BoldSpan> – I'm a dedicated NBA and MLB fan. I enjoy
					both the storytelling of the seasons and the deeper strategy and stats that drive the games.
				</p>
			</div>
		</RowColumnFlex>
	);
}

export function About() {
	const isMobile = useContext(MobileContext);

	const [firstCollectionImages, secondCollectionImages] = useMemo(() => {
		const images = shuffledDogImages();
		const midpoint = Math.ceil(images.length / 2);
		return [images.slice(0, midpoint), images.slice(midpoint)];
	}, []);

	return (
		<>
			<IntroSection isMobile={isMobile} firstCollectionImages={firstCollectionImages} />
			<InterestsSection isMobile={isMobile} secondCollectionImages={secondCollectionImages} />
		</>
	);
}
