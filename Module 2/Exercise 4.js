'use strict';

const numberList = [];
for (;;) {
  let numInput = Number(prompt('Enter a number (or 0 to stop): '))
  if (numInput === 0)
    break;
  numberList.push(numInput);
}

numberList.sort((a, b) => b - a);
console.log(numberList)

