import TradingViewText from "./TradingViewText";
import styles from "./Tile.module.css";
import { colors } from "../constants";

type Props = {
  /** the url of the image */
  iconPath: string;
  heading: string;
  subheading: { value: number; currency: string };
  change: number;
};

export default function Tile({ iconPath, heading, subheading, change }: Props) {
  function getSymbolAndColor(num: number) {
    if (num > 0) {
      return {
        symbol: "+",
        color: "minty-green",
      };
    } else if (num < 0) {
      return {
        symbol: null,
        color: "black",
      };
    } else {
      return {
        symbol: null,
        color: "grey",
      };
    }
  }

  const { color, symbol } = getSymbolAndColor(change);

  return (
    <article className={styles.container}>
      <img src={iconPath} className={styles.img} alt={`Icon for ${heading}`} />
      <TradingViewText textAlign="center">{heading}</TradingViewText>
      <section className={styles.subheadingContainer}>
        <div className={styles.subheading}>
          <TradingViewText>{subheading.value}</TradingViewText>
          <TradingViewText color="cold-grey" type="small">
            {subheading.currency}
          </TradingViewText>
        </div>
        <TradingViewText color={color as keyof typeof colors} type="medium">
          {symbol}
          {change}%
        </TradingViewText>
      </section>
    </article>
  );
}
