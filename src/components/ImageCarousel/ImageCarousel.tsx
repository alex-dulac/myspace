import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CarouselButton, CarouselContainer, CarouselImage } from "@components/ImageCarousel/styles.ts";

interface ImageCarouselProps {
	images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	return (
		<CarouselContainer>
			{images.map((src, index) => (
				<CarouselImage
					key={src}
					src={src}
					className={index === currentImageIndex ? "active" : ""}
				/>
			))}
			<CarouselButton className="prev" onClick={prevImage}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</CarouselButton>
			<CarouselButton className="next" onClick={nextImage}>
				<FontAwesomeIcon icon={faChevronRight} />
			</CarouselButton>
		</CarouselContainer>
	);
};