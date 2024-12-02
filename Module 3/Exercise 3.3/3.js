'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.getElementById('target');

let name_list = '';

for (const name of names){
  name_list += `<li>${name}</li>`;
}

target.innerHTML += name_list;