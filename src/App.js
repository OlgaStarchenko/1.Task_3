import styles from "./App.module.css";
import ButtonRow from "./components/ButtonRow";

export function App() {
  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <h1>OlgaStar</h1>
        <div className={styles.calculatorDisplay}>
          <input type="number" className={styles.displayInput}></input>
        </div>
        <div className={styles.calculatorButtonsPanel}>
          <div className={styles.buttonFirstRow}>
            <ButtonRow />
            <ButtonRow />
            <ButtonRow />
            <ButtonRow />
          </div>
        </div>
      </div>
    </div>
  );
}
