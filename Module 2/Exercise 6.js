'use strict';
const target6 = document.querySelector("#target6")
function randomRoll () {
  return Math.floor(Math.random() * 6) + 1;
}
const resultList = [];
for (;;) {
  let result = randomRoll();
  resultList.push(result);
  if (result === 6)
    break;
}

let listInHTML = '<ul>';
for (let i of resultList) {
  listInHTML += `<li>${i}</li>`;
}
listInHTML += '</ul>';
target6.innerHTML = listInHTML;