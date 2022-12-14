import React, { FC } from "react";
import styles from "./Button.module.scss";

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
}
interface ButtonProps {
  content: string;
  size: ButtonSize;
  icon?: any;
}

const setSizeOfButton = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.large:
      return styles.button_large;
    case ButtonSize.medium:
      return styles.button_medium;
    case ButtonSize.small:
      return styles.button_small;
  }
};

export const Button: FC<ButtonProps> = ({ content, size, icon }) => {
  return (
    <button
      className={`${styles.button} ${setSizeOfButton(size)} ${
        icon ? styles.button_icon : null
      }`}
    >
      {content}
    </button>
  );
};
