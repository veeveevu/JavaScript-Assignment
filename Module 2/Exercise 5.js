'use strict';

const numberList = [];
for (;;) {
  let numberInput = Number(prompt('Enter a number: '));
  if (numberList.includes(numberInput)) {
    alert('The number has already been given!');
    break;
  }
  numberList.push(numberInput);
}
numberList.sort((a,b) => a - b)
console.log(numberList);
