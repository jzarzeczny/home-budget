import { Button, ButtonSize } from "components/common/Button/Button";
import { TextInput } from "components/common/Form/TextInput/TextInput";
import { Layout } from "components/common/Layout/Layout";
import { MainText } from "components/common/MainText/MainText";
import {
  FeatureTitle,
  SectionTitle,
} from "components/common/SectionTitle/SectionTitle";
import styles from "./SortExpenses.module.scss";

export const SortExpensesPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.introContainer}>
          <SectionTitle text="Zarządzaj kosztami" />
          <MainText>
            Tworzenie kategorii ma za zadanie pogrupować koszty. Dzięki temu
            będziesz w stanie pogrupować swoje wydatki według własnego uznania.
            Będziesz miał kontrolę nad tym na co i ile wydajesz w danym
            miesiącu.
            <br />
            <br />
            Kategorie mogą być bardzo szczegółowe np. papierosy. Mogą również
            zawierać wiele różnych produktów, które grupujesz według własnego
            uznania np. zakupy lub chemia.
            <br />
            <br />
            To ty jesteś najlepszy w segregowaniu własnych kosztów.
            Eksperymentuj, znajdź sposób który w najlepszy sposób pozwoli Ci
            zbadać swoje koszta!
          </MainText>
          <p className={styles.mainText}></p>
        </div>
        <div className={styles.formContainer}>
          <FeatureTitle text="Dodaj nowe koszta" />
          <form className={styles.costForm}>
            <TextInput inputName="expensesName" labelText="Nazwa" />
            <TextInput inputName="expensesPlace" labelText="Miejsce" />
            <TextInput inputName="expensesCost" labelText="Koszt" />
            <Button content="Zapisz" size={ButtonSize.small} />
          </form>
        </div>

        <FeatureTitle text="Przypisz koszt do kategorii" />
        <div className={styles.container}>
          <div className={styles.queueContainer}>
            <div className={styles.queueContentBox}>
              <h3 className={styles.phaseTitle}>Następny koszt</h3>

              <div className={styles.smallBox}>
                <h6>Nazwa zakupu</h6>
              </div>
            </div>
            <div className={styles.queueContentBox}>
              <div className={styles.stackedBoxes}>
                <h3 className={styles.phaseTitle}>Kolejka kosztów</h3>
                <div className={`${styles.smallBox} ${styles.firstBox}`}>
                  <h6>Nazwa zakupu</h6>
                  <div className={`${styles.smallBox} ${styles.middleBox}`}>
                    <h6>Nazwa zakupu</h6>
                  </div>
                  <div className={`${styles.smallBox} ${styles.bottomBox}`}>
                    <h6>Nazwa zakupu</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.queueContentBox}>
              <h3 className={styles.phaseTitle}>Ostatni koszt</h3>
              <div className={styles.lastBox}>
                <div className={`${styles.smallBox}`}>
                  <h6>Nazwa zakupu</h6>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.currentExpense}>
            <h3 className={styles.phaseTitle}>Obecny koszt</h3>
            <div className={styles.box}>
              <p className={styles.place}>Miejsce zakupu</p>
              <h5 className={styles.name}>Nazwa zakupu</h5>
              <p className={styles.cost}>100PLN</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
