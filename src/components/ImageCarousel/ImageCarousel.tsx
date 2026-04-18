import React, { useState, useEffect } from "react";
import { CarouselContainer, CarouselImage } from "@components/ImageCarousel/styles.ts";

interface ImageCarouselProps {
	images: string[];
	autoPlayInterval?: number; // interval in milliseconds
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, autoPlayInterval = 4000 }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, autoPlayInterval);

		return () => clearInterval(interval);
	}, [images.length, autoPlayInterval]);

	return (
		<CarouselContainer>
			{images.map((src, index) => (
				<CarouselImage
					key={src}
					src={src}
					className={index === currentImageIndex ? "active" : ""}
				/>
			))}
		</CarouselContainer>
	);
};