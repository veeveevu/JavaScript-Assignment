'use strict';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const select = document.getElementById('operation');
const calculateButton = document.getElementById('start');
const result = document.getElementById('result');

calculateButton.addEventListener('click', function() {
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);

  const performance = select.value;
  let calculateResult;

  switch (performance) {
    case 'add':
      calculateResult = number1 + number2;
      break;
    case 'sub':
      calculateResult = number1 - number2;
      break;
    case 'multi':
      calculateResult = number1 * number2;
      break;
    case 'div':
      if (number2 === 0) {
        result.textContent = "Can't divide by 0";
        return;
      }
      calculateResult = number1 / number2;
      break;
  }

  result.textContent = `Result: ${calculateResult}`;
});