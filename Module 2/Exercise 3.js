'use strict';

const target3 = document.querySelector('#target3');

const dogList = [];
for (let i = 0; i < 6; i++) {
  let dogName = prompt(`Enter dog no.${i+1} name: `);
  dogList.push(dogName);
}

dogList.sort()

let listInHTML = '<ul>';
for (let name of dogList.reverse()) {
  listInHTML += `<li>${name}</li>`;
}
listInHTML += '<ul>';
target3.innerHTML = listInHTML;

