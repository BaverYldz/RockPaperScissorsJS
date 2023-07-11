
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';


if (playerMove === 'Scissors') {

  if (computerMove === 'Rock') {
    result = 'you lose.'
  } else if (computerMove === 'Paper') {
    result = 'You win.'
  } else if (computerMove === 'Scissors') {
    result = 'tie.'
  }

} else if (playerMove === 'Paper') {

  if (computerMove === 'Rock') {
    result = 'you win.'
  } else if (computerMove === 'Paper') {
    result = 'tie'
  } else if (computerMove === 'Scissors') {
    result = 'You lose.'
  }

} else if (playerMove === 'Rock') {

  if (computerMove === 'Rock') {
    result = 'tie.'
  } else if (computerMove === 'Paper') {
    result = 'You lose.'
  } else if (computerMove === 'Scissors') {
    result = 'You Win.'
  }
  
}


  alert(` You picked ${playerMove}. Computer picked ${computerMove}. ${result} `);
}





function pickComputerMove() {

const randomNumber = Math.random();

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'Rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'Paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'Scissors';
}

return computerMove;

}


