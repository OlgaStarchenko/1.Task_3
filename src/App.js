import { useState } from "react";
import styles from "./App.module.css";

export function App() {
  const NUMS = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

  const [operand1, setOperand1] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [hasResult, setHasResult] = useState(false);

  function hendlyNumberClick(num) {
    if (operator === "") {
      setHasResult(false);
      const newOperand1 = operand1 + num;
      setOperand1(newOperand1);
      setDisplayValue(newOperand1);
    } else {
      const newOperand2 = operand2 + num;
      setOperand2(newOperand2);
      setDisplayValue(operand1 + operator + newOperand2);
    }
  }

  function addPlusOperator() {
    setOperator("+");
    setDisplayValue((prev) => prev + "+");
  }

  function addMinusOperator() {
    setOperator("-");
    setDisplayValue((prev) => prev + "-");
  }

  function makeCalculations(operator) {
    if (operator === "+") {
      const sum = Number(operand1) + Number(operand2);
      setDisplayValue(sum);
    } else {
      const difference = Number(operand1) - Number(operand2);
      setDisplayValue(difference);
    }

    setHasResult(true);
    setOperand1("");
    setOperand2("");
    setOperator("");
  }

  function resetValue() {
    setOperand1("");
    setOperand2("");
    setOperator("");
    setDisplayValue("");
    setHasResult(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <h1>OlgaStar</h1>

        <div className={styles.calculatorDisplay}>
          <input
            type="text"
            readOnly
            className={`
				${styles.displayInput}
				${hasResult ? styles.displayInputResult : ""}`}
            value={displayValue === "" ? "0" : displayValue}
          ></input>
        </div>

        <div className={styles.calculatorButtonsPanel}>
          <div className={styles.numberButtonContainer}>
            {NUMS.map((num, index) => (
              <button
                key={index}
                className={`${styles.button}  ${num === "0" ? styles.zeroButton : ""} `}
                onClick={() => hendlyNumberClick(num)}
              >
                {num}
              </button>
            ))}
          </div>

          <div className={styles.actionButtonContainer}>
            <button className={styles.resetButton} onClick={resetValue}>
              C
            </button>
            <button className={styles.button} onClick={addPlusOperator}>
              +
            </button>
            <button className={styles.button} onClick={addMinusOperator}>
              -
            </button>
            <button
              className={styles.button}
              onClick={() => makeCalculations(operator)}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
