import { Layout } from "components/common/Layout/Layout";
import React from "react";
import style from "./Landing.module.scss";

export function Landing() {
  return (
    <Layout>
      <main className={style.main}>
        <div>Landing</div>
        <li>
          <a href={`history`}>History</a>
        </li>
        <li>
          <a href={`categories`}>Dodaj kategorię</a>
        </li>
        <li>
          <a href={`sortExpenses`}>Sortuj wydatki </a>
        </li>
      </main>
    </Layout>
  );
}
