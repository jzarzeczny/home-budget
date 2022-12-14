import React from "react";
import styles from "./Hamburger.module.scss";

export const Hamburger = () => {
  return (
    <div className={styles.container}>
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </div>
  );
};
