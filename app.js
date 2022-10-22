function computerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  if (choice == 1) return 'rock';
  if (choice == 2) return 'paper';
  if (choice == 3) return 'scissors';
}
let computerSelection = computerChoice();
let playerSelection = computerChoice();

var c = 0;
var p = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("it's a draw, both get 1 points each");
    p++;
    c++;
  }
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    console.log('computer selection wins');
    c++;
  }
  if (playerSelection == 'paper' && computerSelection == 'rock') {
    console.log('player selection wins');
    p++;
  }
  if (playerSelection == 'scissors' && computerSelection == 'paper') {
    console.log('player selection wins');
    p++;
  }
  if (playerSelection == 'paper' && computerSelection == 'scissors') {
    console.log('computer selection wins');
    c++;
  }
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    console.log('computer selection wins');
    c++;
  }
  if (playerSelection == 'scissors' && computerSelection == 'rock') {
    console.log('player selection wins');
    p++;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerChoice();
    let playerSelection = computerChoice();
    playRound(computerSelection, playerSelection);
  }
  console.log('player score is ', p, 'and computer score is ', c);
  if (p > c) {
    console.log('Player wins!');
  }
  if (c > p) {
    console.log('Computer wins!');
  }
  if (c == p) {
    console.log("It's a draw!");
  }
}
game();
