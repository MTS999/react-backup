
// import { useState } from 'react'
import './App.css'
import React, { useEffect } from 'react'
function App() {
  const [input, setInput] = React.useState("")
  const [result, setResult] = React.useState("")
  const [history, setHistory] = React.useState([])
  const [historybtn, setHistorybtn] = React.useState(false)






  function handleInput(value) {


    if (input.length === 0 && (value === '/' || value === "*" || value === "-" || value === "+")) {
      return
    }
    if (value === "%" || value === "+" || value === "-" || value === "*" || value === "/") {



      if (input.endsWith === ("%") || input.endsWith("*") || input.endsWith("+") || input.endsWith("/") || input.endsWith("-")) {
        return
      }
    }

    if (value === 'D') {
      // console.log("mts")

      if (input.length === 0) {
        return
      }
      let temp = input.slice(0, -1)
      setInput(temp)
      if (temp.length === 0) {
        setResult("")
        return
      }
      if (temp.endsWith("*") || temp.endsWith("+") || temp.endsWith("/") || temp.endsWith("-")) {
        let temp1 = temp.slice(0, -1)
        // setInput(temp1)

        calculate(temp1)

        return

      }
      calculate(temp)
      setInput(temp)
      return
    }
    let temp = input + value
    setInput(temp)

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      return
    }
    calculate(temp)

    if (input.length === 0) {
      setResult("")
    }
    if (input.length === 1) {
      setResult("" + input)
    }

  }



  function handleHistory() {
    if (result !== "") {
      const obj = {
        id: history.length,
        value: input,
        result: result
      };
      setHistory([...history, obj]);
    }


  }
  function handleKeyDown(event) {
    const keyValue = event.key;

    if (!isNaN(keyValue) || ['+', '-', '*', '/', '%', '.',].includes(keyValue)) {
      handleInput(keyValue);
    } else if (keyValue === 'Delete') {
      handleEmpty()
    } else if (keyValue === 'Backspace') {
      handleInput('D');
    }
    else if (keyValue === "Enter") {
      handleHistory()
    }
  }



  const History = history.map((item) => (
    <div className='his-main' key={item.id}>
      <p className='his-title'>{item.value}</p>
      <p>{item.result}</p>
    </div>
  ));



  function handleEmpty() {
    setInput("");
    setResult("")
  }

  function precedence(op) {
    if (op === '+' || op === '-')
      return 1;
    if (op === '*' || op === '/')
      return 2;
    if (op === '^')
      return 3;
    return 0;
  }

  function applyOperation(operand1, operand2, op) {
    switch (op) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        if (operand2 === 0) {
          throw new Error("Division by zero");
        }
        return operand1 / operand2;
      case '^':
        return Math.pow(operand1, operand2);
      default:
        throw new Error("Invalid operator");
    }
  }

  function calculate(expression) {
    const operandStack = [];
    const operatorStack = [];

    for (let i = 0; i < expression.length; ++i) {
      let token = expression[i];

      if (!isNaN(token)) {
        let operand = '';
        while (i < expression.length && !isNaN(expression[i])) {
          operand += expression[i];
          ++i;
        }
        --i; // Move back one position as the loop will increment i
        operandStack.push(parseInt(operand));
      } else if (token === '(') {
        operatorStack.push(token);
      } else if (token === ')') {
        while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
          let op = operatorStack.pop();
          let operand2 = operandStack.pop();
          let operand1 = operandStack.pop();
          let result = applyOperation(operand1, operand2, op);
          operandStack.push(result);
        }
        operatorStack.pop(); // Pop the '('
      } else if (token === '+' || token === '-' || token === '*' || token === '/' || token === '^') {
        while (operatorStack.length > 0 && precedence(operatorStack[operatorStack.length - 1]) >= precedence(token)) {
          let op = operatorStack.pop();
          let operand2 = operandStack.pop();
          let operand1 = operandStack.pop();
          let result = applyOperation(operand1, operand2, op);
          operandStack.push(result);
        }
        operatorStack.push(token);
      }
    }

    while (operatorStack.length > 0) {
      let op = operatorStack.pop();
      let operand2 = operandStack.pop();
      let operand1 = operandStack.pop();
      let result = applyOperation(operand1, operand2, op);
      operandStack.push(result);
    }

    // return operandStack[0];
    setResult(operandStack[0]);

  }

  useEffect(()=>{
    document.addEventListener("keydown", handleKeyDown)
    return () =>{
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [input])


  return (
    <>


      <div
        className='container'
        tabIndex={0}
        // onKeyDown={handleKeyDown}
      >
        <div className='main'>
          <div className='input-container'>
            <input

              type="text"
              name="input"
              id="input"
              value={input}
              className='input'
              readOnly
            />
          </div>
          <div className='result-container'>


            <p className='result'>{result}</p>
          </div>
          <div className='buttons'>

            <div className="row">
              <button className="btn cream" onClick={handleEmpty} >C</button>
              <button className="btn cream" onClick={() => handleInput("D")}
              >D</button>
              <button className="btn cream" disabled onClick={() => handleInput("%")}>%</button>
              <button className="btn color-yellow" onClick={() => handleInput("/")}>/</button>

            </div>
            <div className="row">
              <button className="btn" onClick={() => handleInput("7")}>7</button>
              <button className="btn" onClick={() => handleInput("8")}>8</button>
              <button className="btn" onClick={() => handleInput("9")}>9</button>
              <button className="btn color-yellow" onClick={() => handleInput("*")} >*</button>
            </div>
            <div className="row">
              <button className="btn" onClick={() => handleInput("4")}>4</button>
              <button className="btn" onClick={() => handleInput("5")}>5</button>
              <button className="btn" onClick={() => handleInput("6")}>6</button>
              <button className="btn color-yellow" onClick={() => handleInput("-")}>-</button>
            </div>
            <div className="row">
              <button className="btn" onClick={() => handleInput("1")}>1</button>
              <button className="btn" onClick={() => handleInput("2")}>2</button>
              <button className="btn" onClick={() => handleInput("3")}>3</button>
              <button className="btn color-yellow" onClick={() => handleInput("+")}>+</button>
            </div>
            <div className="row">
              <button className="btn btn0" onClick={() => handleInput("0")}>0</button>
              <button className="btn" disabled onClick={() => handleInput(".")}>.</button>
              <button className="btn color-yellow" onClick={handleHistory}>=</button>
            </div>

          </div>
        </div>
        <div className="history">
          <button className='history-btn'
            onClick={() => setHistorybtn(!historybtn)}>History</button>


          {historybtn &&

            History
          }
        </div>
      </div>
    </>
  )
}

export default App
