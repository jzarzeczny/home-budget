import React from "react";
import { Logo } from "./Logo/Logo";
import styles from "./Header.module.scss";
import { Hamburger } from "./Hamburger/Hamburger";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Hamburger />
    </header>
  );
};
