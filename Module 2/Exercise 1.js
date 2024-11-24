const numberList = [];
for (let i = 0; i < 5; i++) {
  const numInput = parseInt(prompt('Enter a number: '));
  numberList.push(numInput);
}

console.log(numberList);
console.log("In reverse order: ");
for (let i = numberList.length - 1; i >= 0; i--) {
  console.log(numberList[i]);
}