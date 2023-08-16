import { TradingViewText, Tile, Arrow } from "./components";
import styles from "./App.module.css";
import { useCarousel } from "./hooks";
import { MOCK_API_RESPONSE } from "./MOCK_API_RESPONSE";
import { generateRandomNumber } from "./util";
import { useEffect, useState } from "react";

export default function App() {
  const { currentIndex, carouselIncrement, handleCarouselClick } = useCarousel(
    MOCK_API_RESPONSE.length
  );
  const [subheadingValues, setSubheadingValues] = useState(
    MOCK_API_RESPONSE.map(() => generateRandomNumber(0, 200))
  );

  const [changeValues, setChangeValues] = useState(
    MOCK_API_RESPONSE.map(() => generateRandomNumber(10, 20))
  );

  // Could do this but it would mean re running the effect every few seconds which seems a bit wasteful
  // so instead I went with an empty depedancy array that calls the updateValues function

  // useEffect(() => {
  //   const updateValues = () => {
  //     setSubheadingValues(values =>
  //       values.map(() => generateRandomNumber(0, 200))
  //     );
  //     setChangeValues(values =>
  //       values.map(() => generateRandomNumber(10, 20))
  //     );
  //   };

  //   const timerId = setTimeout(updateValues, generateRandomNumber(1000, 5000));

  //   return () => clearTimeout(timerId);
  // }, [subheadingValues, changeValues]);

  useEffect(() => {
    const updateValues = () => {
      setSubheadingValues((values) =>
        values.map(() => generateRandomNumber(0, 200))
      );
      setChangeValues((values) =>
        values.map(() => generateRandomNumber(10, 20))
      );

      const timerId = setTimeout(
        updateValues,
        generateRandomNumber(1000, 5000)
      );
      return () => clearTimeout(timerId);
    };

    updateValues();
  }, []);

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <TradingViewText type="subheader">Community trends</TradingViewText>
      </header>

      <section
        className={styles.carouselContainer}
        aria-label="trading data carousel"
      >
        {/* Everytime the currentIndex changes, the slice function will generate a new array. This might cause
        unnessary re-renders. I could memoise this if it does cause a performance issue, but for now with this small dataset
      there is no reason to premeturely optimise */}
        {MOCK_API_RESPONSE.slice(
          currentIndex,
          currentIndex + carouselIncrement
        ).map(({ id, heading, icon }, index) => (
          <Tile
            key={id}
            iconPath={icon}
            heading={heading}
            subheading={{ value: subheadingValues[index], currency: "USD" }}
            change={changeValues[index]}
          />
        ))}
        <div className={styles.arrowContainer}>
          <Arrow
            onClick={handleCarouselClick}
            aria-label="ext items in carousel"
          />
        </div>
      </section>
    </main>
  );
}
