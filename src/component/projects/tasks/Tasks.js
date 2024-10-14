import React, { useState } from "react";

const Tasks = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [reverse, setReverse] = useState(false);
  const [pattern, setPattern] = useState([]);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInputChange1 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleButtonClick = () => {
    if (!reverse) {
      const numbersArray = inputValue.split(/\s+/).map(Number);
      setNumbers(numbersArray);
    } else {
      const reversedNumbers = inputValue.split(/\s+/).map(Number).reverse();
      setNumbers(reversedNumbers);
    }
    setReverse(!reverse);
  };

  const handleShowClick = () => {
    const n = parseInt(inputValue2);
    if (!isNaN(n) && n > 0) {
      const newPattern = [];
      for (let i = 1; i <= n; i++) {
        newPattern.push('*'.repeat(i));
      }
      setPattern(newPattern);
    }
  };

  return (
    <div className="text-cente">
      <h1 className="heading text-center">
        <b> Tasks </b>
      </h1>

      <div className='content d_flex'>
      <div className="left">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter numbers separated by spaces"
        />
        <button className="home-btn" onClick={handleButtonClick}>
          {reverse ? "Reverse Numbers" : "Show Numbers"}
        </button>
        <div>
          {numbers.map((num, index) => (
            <div key={index}>{num}</div>
          ))}
        </div>
      </div>
      
      <div className="right">
        <input
          type="text"
          value={inputValue2}
          onChange={handleInputChange1}
          placeholder="Enter number"
        />
         <button className="home-btn" onClick={handleShowClick}>Show Pattern</button>
      <div>
        {pattern.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      </div>
      </div>

    </div>
  );
};

export default Tasks;
