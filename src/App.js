import { useState } from "react";
import styles from "./App.module.css";

export function App() {
  const NUMS = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

  const [operand1, setOperand1] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <h1>OlgaStar</h1>

        <div className={styles.calculatorDisplay}>
          <input
            type="text"
            readOnly
            className={styles.displayInput}
            value={displayValue === "" ? "0" : displayValue}
          ></input>
        </div>

        <div className={styles.calculatorButtonsPanel}>
          <div className={styles.numberButtonContainer}>
            {NUMS.map((num, index) =>
              num === "0" ? (
                <button
                  key={index}
                  className={styles.button}
                  onClick={() => console.log(num)}
                >
                  {num}
                </button>
              ) : (
                <button
                  key={index}
                  className={styles.button}
                  onClick={() => console.log(num)}
                >
                  {num}
                </button>
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
