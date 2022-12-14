import React, { FC } from "react";
import styles from "./HistoryDate.module.scss";

interface HistoryDateProps {
  date: {
    month: number;
    year: number;
  };
  isRight: boolean;
}

export const HistoryDate: FC<HistoryDateProps> = ({ date, isRight }) => {
  return (
    <div
      className={`${styles.constrainer} ${
        isRight ? styles.constrainer__right : null
      }`}
    >
      <span className={styles.number}>{date.month}</span>
      <div className={styles.separator} />
      {date.year}
    </div>
  );
};
