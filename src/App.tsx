import { TradingViewText, Tile, Arrow } from "./components";
import styles from "./App.module.css";
import { useCarousel } from "./hooks";
import { MOCK_API_RESPONSE } from "./MOCK_API_RESPONSE";

export default function App() {
  const { currentIndex, carouselIncrement, handleCarouselClick } = useCarousel(
    MOCK_API_RESPONSE.length
  );

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
        ).map(({ id, heading, change, subheading, icon }) => (
          <Tile
            key={id}
            iconPath={icon}
            heading={heading}
            subheading={subheading}
            change={change}
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
