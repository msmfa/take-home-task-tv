import { useState, useEffect } from "react";

const getNumberOfCarouselItems = (windowWidth: number) => {
  if (windowWidth <= 768) {
    return 3;
  } else if (windowWidth <= 1024) {
    return 4;
  } else if (windowWidth <= 1440) {
    return 5;
  } else {
    return 6;
  }
};

/**
 * @returns A hook that allows dynamic carousel logic based on the length of the desired carousel
 */
export default function useCarousel(length: number) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [carouselIncrement, setCarouselIncrement] = useState<number>(
    getNumberOfCarouselItems(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setCarouselIncrement(getNumberOfCarouselItems(window.innerWidth));
    };
    // we could debounce this is we ran into performance issues
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCarouselClick = () => {
    const nextIndex = currentIndex + carouselIncrement;
    if (nextIndex < length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0);
    }
  };

  return {
    currentIndex,
    carouselIncrement,
    handleCarouselClick,
  };
}
