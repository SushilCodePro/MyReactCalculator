import React, { useState } from 'react';
import './App.css';
import * as math from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(math.evaluate(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult(0);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };
  function getButtonclassName(btn){
    switch(btn){
      case '0':
      return 'zeroButton';
      case '/':
      return 'leftSideButton';
      case '*':
      return 'leftSideButton';
      case '-':
      return 'leftSideButton';
      case '+':

      return 'leftSideButton';
      case '=':
      return 'leftSideButton';
      default:
        return;
    }
    

  }

  return (
    <div className="container">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="cal">
        {['C', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)} className={getButtonclassName(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
