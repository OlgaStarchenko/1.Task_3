import styles from "./App.module.css";

export function App() {
  const NUMS = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <h1>OlgaStar</h1>

        <div className={styles.calculatorDisplay}>
          <input type="number" className={styles.displayInput}></input>
        </div>

        <div className={styles.calculatorButtonsPanel}>
          <div className={styles.numberButtonContainer}>
            {NUMS.map((num) =>
              num === "0" ? (
                <button className={styles.button}>{num}</button>
              ) : (
                <button className={styles.button}>{num}</button>
              ),
            )}
          </div>

          <div className={styles.actionButtonContainer}>
            <button className={styles.resetButton}>C</button>
            <button className={styles.button}>+</button>
            <button className={styles.button}>-</button>
            <button className={styles.button}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
