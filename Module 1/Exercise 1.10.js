'use strict';

//1.9
const target10 = document.querySelector('#target10');

function diceProbability () {
  const numberOfDice = parseInt(prompt("How many dice do you want to throw?"))
  const givenSum = parseInt(prompt("What is the sum you want to get?"))

  let correctRollTimes = 0;
  const totalRollTimes = 10000;

  for (let i = 0; i < totalRollTimes; i++) {
    let sum = 0;

    for (let x = 0; x < numberOfDice; x++) {
      sum += Math.floor(Math.random() * 6) + 1;
    }
    if (sum === givenSum) {
      correctRollTimes++;
    }
  }

  let result = (correctRollTimes / totalRollTimes) * 100

  target10.innerHTML = `Probability to get sum ${givenSum} with ${numberOfDice} dice is ${result.toFixed(2)}%`
}

diceProbability()
