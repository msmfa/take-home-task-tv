import { colors } from "../constants";
import styles from "./Arrow.module.css";

type Props = {
  onClick: () => void;
};

export default function Arrow({ onClick }: Props) {
  return (
    <button className={styles.container} onClick={onClick}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.2929 7.29289C10.6834 6.90237 11.3166 6.90237 11.7071 7.29289L17.7071 13.2929C18.0976 13.6834 18.0976 14.3166 17.7071 14.7071L11.7071 20.7071C11.3166 21.0976 10.6834 21.0976 10.2929 20.7071C9.90237 20.3166 9.90237 19.6834 10.2929 19.2929L15.5858 14L10.2929 8.70711C9.90237 8.31658 9.90237 7.68342 10.2929 7.29289Z"
          fill={colors["cold-grey"]}
        />
      </svg>
    </button>
  );
}
