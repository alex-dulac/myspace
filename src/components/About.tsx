import React, { useContext, useMemo } from "react";
import { Container, Content, Image, ImageContainer, Link, RowColumnFlex } from "@library/elements";
import { ImageCarousel } from "@components/ImageCarousel";
import { MobileContext } from "@library/MobileContext";
import { shuffledDogImages } from "@library/utils";
import { github, lastFm } from "@library/links";


export function About() {
	const isMobile = useContext(MobileContext);

	const [firstCollectionImages, secondCollectionImages] = useMemo(() => {
		const images = shuffledDogImages();
		const midpoint = Math.ceil(images.length / 2);
		return [images.slice(0, midpoint), images.slice(midpoint)];
	}, []);

	const lastFmLink = <Link style={{ fontWeight: 'bold' }} href={lastFm.url} target="_blank"> Last.fm</Link>;
	const scrobblerLink = <Link style={{ fontWeight: 'bold' }} href={github.url + '/py-scrobbler'} target="_blank"> my own tooling</Link>;

	return (
		<Container id={"about"}>
			<Content>
				<RowColumnFlex>
					<div>
						<p>
							I'm a lifelong Mainer, and currently live in southern Maine with my wife and our two pitbulls- Lila & Lou.
						</p>
						<p>
							When I’m not writing software, I like to stay creatively and analytically engaged in a few other ways:
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
			</Content>
			<Content>
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
							<span style={{ fontWeight: 'bold' }}>Lifelong Musician</span> – I’ve played in bands for years, and while
							I’m no longer active on stage, music remains a key creative outlet for me. These days,
							it’s more about personal projects and continuous learning.
						</p>
						<p>
							<span style={{ fontWeight: 'bold' }}>Amateur Archivist</span> – I log all the music I listen to on {lastFmLink},
							because I love seeing how my listening taste and habits evolve over time. I also enjoy experimenting
							with {scrobblerLink} to process and analyze my data.
						</p>
						<p>
							<span style={{ fontWeight: 'bold' }}>Sports Enthusiast</span> – I’m a dedicated NBA and MLB fan. I enjoy
							both the storytelling of the seasons and the deeper strategy and stats that drive the games.
						</p>
					</div>
				</RowColumnFlex>
			</Content>
		</Container>
	);
}
