import React from "react";
import styles from "./Categories.module.scss";
import { Layout } from "components/common/Layout/Layout";
import {
  FeatureTitle,
  SectionTitle,
} from "components/common/SectionTitle/SectionTitle";
import { Button, ButtonSize } from "components/common/Button/Button";
import { ShoppingCart, LetterX } from "tabler-icons-react";
import { TextInput } from "components/common/Form/TextInput/TextInput";

export const CategoriesPage = () => {
  return (
    <Layout>
      <main className={styles.page}>
        <SectionTitle text={"Kategorie kosztów"} />
        <p className={styles.main__text}>
          Tworzenie kategorii ma za zadanie pogrupować koszty. Dzięki temu
          będziesz w stanie pogrupować swoje wydatki według własnego uznania.
          Będziesz miał kontrolę nad tym na co i ile wydajesz w danym miesiącu.
          <br />
          <br />
          Kategorie mogą być bardzo szczegółowe np. papierosy. Mogą również
          zawierać wiele różnych produktów, które grupujesz według własnego
          uznania np. zakupy lub chemia.
          <br />
          <br />
          To ty jesteś najlepszy w segregowaniu własnych kosztów. Eksperymentuj,
          znajdź sposób który w najlepszy sposób pozwoli Ci zbadać swoje koszta!
        </p>

        <FeatureTitle text="Dodaj nową kategorie" />
        <form className={styles.newCategoryForm}>
          <TextInput inputName="categoryName" labelText="Nazwa kategorii" />
          <div className={styles.formControl}>
            <legend>Kolor kategorii</legend>
            <input
              className={styles.inputText}
              type="text"
              id="categoryName"
              name="categoryName"
            />
          </div>
          <div className={styles.formControl}>
            <legend>Ikona kategorii</legend>
            <input
              className={styles.inputText}
              type="text"
              id="categoryName"
              name="categoryName"
            />
          </div>
          <Button content="Dodaj" size={ButtonSize.small} />
        </form>

        <FeatureTitle text="Lista kategorii" />
        <div className={styles.categoriesContainer}>
          <div className={styles.singleCategory}>
            <div className={styles.categoryIconContainer}>
              <ShoppingCart />
            </div>
            <p>Kategoria nr. 1</p>
            <LetterX />
          </div>
        </div>

        {/* <div className={styles.categories__container}>
          <div className={styles.categories__card}>
            <h3
              style={{ backgroundColor: "#ffadad" }}
              className={styles.card__header}
            >
              Zakupy
            </h3>
          </div>
          <div
            style={{ backgroundColor: "#ffd6a5" }}
            className={styles.categories__card}
          >
            <h3 className={styles.card__header}>Opłaty</h3>
          </div>
          <div
            style={{ backgroundColor: "#fdffb6" }}
            className={styles.categories__card}
          >
            <h3 className={styles.card__header}>Opłaty</h3>
          </div>
          <div
            style={{ backgroundColor: "#caffbf" }}
            className={styles.categories__card}
          >
            <h3 className={styles.card__header}>Opłaty</h3>
          </div>
          <div
            style={{ backgroundColor: "#9bf6ff" }}
            className={styles.categories__card}
          >
            <h3 className={styles.card__header}>Opłaty</h3>
          </div>
        </div>
        <form className={styles.form__container}>
          <h3>Dodaj nową kategorię</h3>
          <div className={styles.form__control}>
            <label htmlFor="category">Dodaj nową kategorię</label>
            <input id="category" type="text" />
          </div>
          <input
            className={styles.submit}
            type="submit"
            value="Dodaj kategorię"
          />
        </form>
        <div>
          <button>Zapisz</button>
        </div> */}
      </main>
    </Layout>
  );
};
