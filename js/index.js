function computerLogic () {
    let randomint = Math.floor(Math.random() * 3);
    if (randomint == 0) {
        return 'SCISSORS';
    }
    if (randomint == 1) {
        return 'ROCK';
    }
    if (randomint == 2) {
        return 'PAPER';
    }
}

function game(playerSelection) {
    let computerChoice = computerLogic();
    console.log(computerChoice);
    console.log(playerSelection);
    if (playerSelection == computerChoice) {
        return 'Tie';
    }

    if (playerSelection == 'ROCK') {
        if (computerChoice == 'PAPER') {
            return 'Loss';
        }
        return 'Win';
    }
    if (playerSelection == 'PAPER') {
        if (computerChoice == 'SCISSORS') {
            return 'Loss';
        }
        return 'Win';
    }
    if (playerSelection == 'SCISSORS') {
        if (computerChoice == 'ROCK') {
            return 'Loss';
        }
        return 'Win';
    }
}

function playRound() {
    let playerSelection = prompt('Make your move. Rock, Paper, or Scissors?');
    playerSelection = playerSelection.toUpperCase();
    console.log(game(playerSelection));
}

playRound();
playRound();
playRound();
playRound();
playRound();

