import React, {useContext, useMemo} from "react";
import { Container, Content, Image, ImageContainer, RowColumnFlex } from "@library/elements";
import { ImageCarousel } from "@components/ImageCarousel";
import { MobileContext } from "@library/MobileContext";
import { shuffleArray } from "@library/utils";

const dogImages = [
	"/images/dogs/01_dog.jpg",
	"/images/dogs/02_dog.jpg",
	"/images/dogs/03_dog.jpg",
	"/images/dogs/04_dog.jpg",
	"/images/dogs/05_dog.jpg",
	"/images/dogs/06_dog.jpg",
	"/images/dogs/07_dog.jpg",
	"/images/dogs/08_dog.jpg",
    "/images/dogs/09_dog.jpg",
    "/images/dogs/10_dog.jpg",
    "/images/dogs/11_dog.jpg",
];


export function About() {
	const isMobile = useContext(MobileContext);

	const [firstCollectionImages, secondCollectionImages] = useMemo(() => {
		const shuffled = shuffleArray(dogImages);
		const midpoint = Math.ceil(shuffled.length / 2);
		return [shuffled.slice(0, midpoint), shuffled.slice(midpoint)];
	}, []);

	return (
		<Container id={"about"}>
			<Content>
				<RowColumnFlex>
					<div>
						I'm a lifelong Mainer, having graduated from Maine schools, with valuable experience from some of Maine's best companies.
						<br/>
						<br/>
						I currently live in southern Maine with my wife and our two pitbulls- Lila & Lou.
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
