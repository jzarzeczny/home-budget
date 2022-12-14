import React, { FC, ReactNode } from "react";
import style from "./Layout.module.scss";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { SidePanel } from "./SidePanel/SidePanel";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <SidePanel />
      {children}
      <Footer />
    </div>
  );
};
