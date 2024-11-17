'use strict';

//1.6
const target6 = document.querySelector('#target6');
const question = confirm("Task 6. Should I calculate the square root?");
if (question) {
  let number = +prompt("Enter a number: ");
  if (number >= 0){
    let squareRoot = Math.sqrt(number);
    target6.innerHTML += `Square root of ${number} is ${squareRoot}`;
  }
  else {
    target6.innerHTML += `The square root of a negative number is not defined`;
  }

}
else {
  target6.innerHTML += `The square root is not calculated.`;
}
