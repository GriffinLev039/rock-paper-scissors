const winner = document.querySelector('.winner');
const results = document.querySelector('.results');
const btn = document.querySelectorAll('.btn');
const playerOutput = document.getElementById('players');
const cpuOutput = document.getElementById('cpu');


let playerScore = 0;
let cpuScore = 0;
let gameOver = 0;

cpuOutput.textContent = cpuScore;
playerOutput.textContent = playerScore;


btn.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        playRound(button.id);
    });
});



function computerLogic () {
    let randomint = Math.floor(Math.random() * 3);
    if (gameOver == 1) {
        cpuScore = 0;
        playerScore = 0;
        winner.textContent = '';
        cpuOutput.textContent = cpuScore;
        playerOutput.textContent = playerScore;
        gameOver = 0;
    }
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

function playRound(choice) {
    playerSelection = choice.toUpperCase();
    let x = game(playerSelection);
    results.textContent = x;
    if (results.textContent === 'Win') {
        playerScore += 1;
        playerOutput.textContent = playerScore;
        if (playerScore == 5) {
            winner.textContent = 'YOU WIN!';
            gameOver = 1;
        }
    } else if (results.textContent == 'Loss') {
        cpuScore += 1;
        cpuOutput.textContent = cpuScore;
        if (cpuScore == 5) {
            winner.textContent = 'YOU LOSE...';
            gameOver = 1;
        }
    }


}

