function computerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  if (choice == 1) return 'rock';
  if (choice == 2) return 'paper';
  if (choice == 3) return 'scissors';
}

function playerChoice() {
  let a = prompt('Please enter a choice');
  let res = a.toLowerCase();
  return res;
}

var c = 0;
var p = 0;
var gamesPlayed = 0;
//plays the actual game
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
  gamesPlayed++;
  if (gamesPlayed == 5) {
    console.log('player score is ', p, 'and computer score is ', c);
    document.getElementById('finScore').innerText =
      'player score is : ' + p + ' and computer score is : ' + c;
    if (p > c) {
      console.log('Player wins!');
      document.getElementById('result').innerText = 'Player wins!';

      if (c > p) {
        console.log('Computer wins!');
        document.getElementById('result').innerText = 'Computer wins!';
      }
      if (c == p) {
        console.log("It's a draw!");
        document.getElementById('result').innerText = "It's a draw!";
      }
      gamesPlayed = 0;
    }
  }
}

function reset() {
  console.log('into reset');
  document.getElementById('result').innerText = 'Result : ';
  document.getElementById('finScore').innerText = 'Final Score : ';
  p = 0;
  c = 0;
  gamesPlayed = 0;
}

document.getElementById('rockButton').addEventListener('click', () => {
  playRound('rock', computerChoice());
});
document.getElementById('paperButton').addEventListener('click', () => {
  playRound('paper', computerChoice());
});
document.getElementById('scissorsButton').addEventListener('click', () => {
  playRound('scissors', computerChoice());
});
document.getElementById('reset').addEventListener('click', () => {
  reset();
});
