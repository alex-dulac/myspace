import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Image } from "@library/elements";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 25rem;
  height: 25rem;
`;

const CarouselImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.active {
    opacity: 1;
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;

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