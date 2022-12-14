import React, { FC } from "react";
import styles from "./TextInput.module.scss";

interface TextInputProps {
  inputName: string;
  labelText: string;
}

export const TextInput: FC<TextInputProps> = ({ inputName, labelText }) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={inputName}>{labelText}</label>
      <input
        className={styles.inputText}
        type="text"
        id={inputName}
        name={inputName}
      />
    </div>
  );
};
