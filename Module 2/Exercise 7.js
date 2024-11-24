'use strict';
const target7 = document.querySelector("#target7")

function randomRoll (sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const resultList = [];
const numOfSide = Number(prompt('Enter the number of sides of your dice: '));
for (;;) {
  let result = randomRoll(numOfSide);
  resultList.push(result);
  if (result === numOfSide)
    break;
}

let listInHTML = '<ul>';
for (let i of resultList) {
  listInHTML += `<li>${i}</li>`;
}
listInHTML += '</ul>';
target7.innerHTML = listInHTML;
