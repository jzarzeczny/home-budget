import { FC } from "react";
import styles from "./MainText.module.scss";

interface MainTextInterface {
  children: string | JSX.Element | (string | JSX.Element)[];
}

export const MainText: FC<MainTextInterface> = ({ children }) => {
  return <p className={styles.mainText}>{children}</p>;
};
