'use strict';

const target8 = document.querySelector("#target8")
function concat(array) {
  let result = "";
  for (let item of array) {
    result += item;
  }
  return result;
}

const myArray = ["Merry", "Xmas", "and", "Happy", "New", "Year"];
const newString = concat(myArray);
target8.innerHTML = newString;
