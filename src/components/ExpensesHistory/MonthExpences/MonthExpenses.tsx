import { Button, ButtonSize } from "components/common/Button/Button";
import React, { FC } from "react";
import styles from "./MonthExpenses.module.scss";

interface MonthExpensesProps {
  expenses: number;
  isRight: boolean;
}

export const MonthExpenses: FC<MonthExpensesProps> = ({
  expenses,
  isRight,
}) => {
  return (
    <div
      className={`${styles.container} ${
        isRight ? styles.container__right : null
      }`}
    >
      <p className={styles.sum}>
        Miesięczne koszty: <br />
        <span>{expenses} </span>PLN
      </p>
      <Button content="Szczegóły" size={ButtonSize.small} />
    </div>
  );
};
