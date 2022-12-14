import React, { FC } from "react";
import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  text: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ text }) => {
  return <h2 className={styles.header}>{text}</h2>;
};

export const FeatureTitle: FC<SectionTitleProps> = ({ text }) => {
  return <h3 className={styles.small_header}>{text}</h3>;
};
