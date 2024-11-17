'use strict';

//1.4
const target4 = document.querySelector('#target4')
let name = prompt("Task 3. Enter your name: ")

let choice = Math.ceil(Math.random() * 4)
switch (choice) {
  case 1:
    target4.innerHTML += `${name}, you are Gryffindor`;
    break;
  case 2:
    target4.innerHTML += `${name}, you are Slytherin`;
    break;
  case 3:
    target4.innerHTML += `${name}, you are Hufflepuff`;
    break;
  case 4:
    target4.innerHTML += `${name}, you are Ravenclaw`;
    break;
  default:
    target4.innerHTML += `Invalid`;
}