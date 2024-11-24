'use strict';

const numOfCandidate = parseInt(prompt('Enter the number of candidates: '));
let candidateList = [];

for (let i = 0; i < numOfCandidate; i++) {
  let name = prompt(`Name for candidate ${i+1}:`)
  candidateList.push({name: name, votes: 0});
}

const numberOfVoter = parseInt(prompt('Enter number of voters:'));
for (let x = 0; x <numberOfVoter; x++) {
  let vote = prompt(`Voter ${x+1}, enter the name you vote for:`);
  if (vote === '') {
    continue;
  }
  let candidate = candidateList.find(candidateItem => candidateItem.name === vote);
  if (candidate) {
    candidate.votes++
  }
}

candidateList.sort((a,b) => b.votes - a.votes);

let winner = candidateList[0];
console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log('Results:')
for (let candidate of candidateList) {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
}