import { useState } from "react";
import styles from "./App.module.css";

export function App() {
  const BUTTONS = [
    "9",
    "8",
    "7",
    "C",
    "6",
    "5",
    "4",
    "+",
    "3",
    "2",
    "1",
    "-",
    "0",
    "=",
  ];

  const [operand1, setOperand1] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [hasResult, setHasResult] = useState(false);

  function hendlyNumberClick(num) {
    if (hasResult) {
      setOperand1(num);
      setOperand2("");
      setOperator("");
      setDisplayValue(num);
      setHasResult(false);
      return;
    }
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
    if (operand1 === "") return;
    if (operator !== "" && operand2 === "") {
      setOperator("+");
      setDisplayValue(operand1 + "+");
      return;
    }
    if (operand2 !== "") {
      let result;
      if (operator === "+") {
        result = Number(operand1) + Number(operand2);
      } else {
        result = Number(operand1) - Number(operand2);
      }

      setOperand1(String(result));
      setOperand2("");
      setOperator("+");
      setDisplayValue(result + "+");
      return;
    }
    setOperator("+");
    setDisplayValue(operand1 + "+");
    return;
  }

  function addMinusOperator() {
    if (operand1 === "") return;

    if (operator !== "" && operand2 === "") {
      setOperator("-");
      setDisplayValue(operand1 + "-");
      return;
    }

    if (operand2 !== "") {
      let result;
      if (operator === "+") {
        result = Number(operand1) + Number(operand2);
      } else if (operator === "-") {
        result = Number(operand1) - Number(operand2);
      }
      setOperand1(result);
      setOperator("-");
      setOperand2("");
      setDisplayValue(result + "-");
      return;
    }
    setOperator("-");
    setDisplayValue(operand1 + "-");
  }

  function makeCalculations() {
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

  function assignOnClickToButtons(buttonName) {
    if (buttonName === "C") {
      return resetValue();
    } else if (buttonName === "+") {
      return addPlusOperator();
    } else if (buttonName === "-") {
      return addMinusOperator();
    } else if (buttonName === "=") {
      return makeCalculations();
    } else {
      return hendlyNumberClick(buttonName);
    }
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
            {BUTTONS.map((num, index) => (
              <button
                key={index}
                className={`${styles.button}  ${num === "C" ? styles.resetButton : ""} `}
                onClick={() => assignOnClickToButtons(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
