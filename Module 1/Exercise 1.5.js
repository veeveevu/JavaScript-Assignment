'use strict';

//1.5
const target5 = document.querySelector('#target5');
function CheckLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) | (year % 400 === 0)) {
    target5.innerHTML += `${year} is a leap year`;
  }
  else {
    target5.innerHTML += `${year} is not a leap year`;
  }
}
let year = prompt("Enter a year: ")
CheckLeapYear(year)