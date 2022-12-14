import { SectionTitle } from "components/common/SectionTitle/SectionTitle";
import styles from "./History.module.scss";
import { ExpensesHistory } from "components/ExpensesHistory/ExpensesHistory";
import { Layout } from "components/common/Layout/Layout";
const mock = [
  {
    periodOfTime: {
      year: 2022,
      month: 1,
    },
    expenses: 1000.0,
    categories: [
      { categoryName: "Kategoria nr. 1", expenses: 250 },
      { categoryName: "Kategoria nr. 2", expenses: 250 },
      { categoryName: "Kategoria nr. 3", expenses: 250 },
      { categoryName: "Kategoria nr. 4", expenses: 250 },
    ],
  },
  {
    periodOfTime: {
      year: 2022,
      month: 2,
    },
    expenses: 1000.0,
    categories: [
      { categoryName: "Kategoria nr. 1", expenses: 250 },
      { categoryName: "Kategoria nr. 2", expenses: 250 },
      { categoryName: "Kategoria nr. 3", expenses: 250 },
      { categoryName: "Kategoria nr. 4", expenses: 250 },
    ],
  },

  {
    periodOfTime: {
      year: 2022,
      month: 3,
    },
    expenses: 1000.0,
    categories: [
      { categoryName: "Kategoria nr. 1", expenses: 250 },
      { categoryName: "Kategoria nr. 2", expenses: 250 },
      { categoryName: "Kategoria nr. 3", expenses: 250 },
      { categoryName: "Kategoria nr. 4", expenses: 250 },
    ],
  },
  {
    periodOfTime: {
      year: 2022,
      month: 4,
    },
    expenses: 1000.0,
    categories: [
      { categoryName: "Kategoria nr. 1", expenses: 250 },
      { categoryName: "Kategoria nr. 2", expenses: 250 },
      { categoryName: "Kategoria nr. 3", expenses: 250 },
      { categoryName: "Kategoria nr. 4", expenses: 250 },
    ],
  },
];

export const HistoryPage = () => {
  return (
    <Layout>
      <SectionTitle text="Historia kosztów domowych" />
      <div className={styles.list__container}>
        {mock.map((item, index) => (
          <ExpensesHistory item={item} index={index} key={index} />
        ))}
      </div>
    </Layout>
  );
};
