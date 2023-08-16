import { colors } from "../constants";
import styles from "./TradingViewText.module.css";

type Props = {
  children: React.ReactNode;
  // I would typically match these props with the design style guide
  type?: "subheader" | "body" | "small" | "medium";
  color?: keyof typeof colors;
  textAlign?: "center" | "left" | "right";
};

export default function TradingViewText({
  children,
  type = "body",
  color = "black",
  textAlign = "left",
}: Props) {
  return (
    <p className={styles[type]} style={{ color: colors[color], textAlign }}>
      {children}
    </p>
  );
}
