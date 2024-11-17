'use strict';

//1.3
const target3 = document.querySelector('#target3')
let num1 = parseInt(prompt("Enter 1st integer: "));
let num2 = parseInt(prompt("Enter 2nd integer: "));
let num3 = parseInt(prompt("Enter 3rd integer: "));

let sum, product, average;
sum = num1 + num2 + num3;
product = num1 * num2 * num3;
average = (num1 + num2 + num3) / 3;

target3.innerHTML += "Sum: " + sum + "<br>";
target3.innerHTML += "Product: " + product + "<br>";
target3.innerHTML += "Average: " + average + "<br>";