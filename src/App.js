import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <h1>OlgaStar</h1>
        <div className={styles.calculatorDisplay}>
          <input type="number" className={styles.displayInput}></input>
        </div>
        <div className={styles.calculatorButtonsPanel}>
          <div>
            <button className={styles.button}>1</button>
          </div>
        </div>
      </div>
    </div>
  );
}
