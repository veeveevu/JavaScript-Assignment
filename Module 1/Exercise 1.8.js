'use strict';

//1.8
const target8 = document.querySelector('#target8');
function findLeapYears() {
  const startYear = parseInt(prompt("Enter start year: "));
  const endYear = parseInt(prompt("Enter end year: "));

  let periodOfYears = [];
  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      periodOfYears.push(year);
    }
  }
  let result = "<ul>";
  for (let year of periodOfYears) {
    result += `<li>${year}</li>`;
  }
  result += "</ul>";
  target8.innerHTML += result;
}

findLeapYears();