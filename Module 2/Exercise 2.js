'use strict';

const target2 = document.querySelector('#target2');
const numberOfParticipant = parseInt(prompt('Enter number of participants: '))
const participantList = [];
for (let i = 0; i < numberOfParticipant; i++) {
  let participantName = prompt('Enter the participant name: ');
  participantList.push(participantName);
}
participantList.sort();

let listInHTML = '<ol>';
for (let name of participantList) {
  listInHTML += `<li>${name}</li>`;
}
listInHTML += '</ol>';
target2.innerHTML = listInHTML;