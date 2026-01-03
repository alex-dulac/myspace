import styled from "styled-components";
import { Image } from "@styles/shared-styles.ts";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 25rem;
  height: 25rem;
`;

export const CarouselImage = styled(Image)`
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

export const CarouselButton = styled.button`
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
