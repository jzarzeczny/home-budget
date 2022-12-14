import React, { FC } from "react";
import { HistoryDate } from "./Date/HistoryDate";
import styles from "./ExpensesHistory.module.scss";
import { MonthExpenses } from "./MonthExpences/MonthExpenses";

interface ExpensesHistoryProps {
  item: any;
  index: number;
}

export const ExpensesHistory: FC<ExpensesHistoryProps> = ({ item, index }) => {
  const isRight = (index: number) => {
    return index % 2 === 0 ? true : false;
  };
  return (
    <>
      <div
        className={`${styles.list__item} ${
          isRight(index) ? styles.list__item__right : styles.list__item__left
        }`}
      >
        <HistoryDate date={item.periodOfTime} isRight={isRight(index)} />
        <MonthExpenses expenses={item.expenses} isRight={isRight(index)} />
      </div>
      <div />
    </>
  );
};
