'use strict';

function even(array) {
  let newArray = [];
  for (let item of array) {
    if (item % 2 === 0) {
      newArray.push(item);
    }
  }
  return newArray;
}

const myArray = [1, 2, 3, 4, 5, 6];
let result = even(myArray);

console.log("Provided array:",myArray);
console.log("Even numbers:",result);