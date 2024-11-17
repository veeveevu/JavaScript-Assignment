'use strict';

//1.9
const target9 = document.querySelector('#target9');

function checkPrimeNumber () {
  const inputNum = parseInt(prompt("Enter an integer to check: "));
  if (inputNum <= 1) {
    target9.innerHTML += `${inputNum} is not a prime number.`;
    return;
  }

  for (let i = 2; i < inputNum; i++) {
    if (inputNum % i === 0) {
      target9.innerHTML += `${inputNum} is not a prime number.`;
      return;
    }
  }

  target9.innerHTML += `${inputNum} is a prime number.`;
}

checkPrimeNumber();