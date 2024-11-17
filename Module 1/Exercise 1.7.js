'use strict';

//1.7
const target7 = document.querySelector('#target7');
const times = parseInt(prompt("Number of dice rolls: "));
let sumResult = 0;
for (let i = 1; i <= times ; i++) {
  let resultEachRoll = Math.floor(Math.random()*6) + 1;
  sumResult += resultEachRoll;
}
target7.innerHTML += `Sum of ${times} rolls is ${sumResult}`;