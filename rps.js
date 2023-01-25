//get a random number between 1 and 3 inclusive.
//assign each number to Paper, Scissors or Rock.
//get a new random number (with associated word) each time
//that the function runs.

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    switch (compChoice) {
        case 1: 
            return 'rock';
            break;
        case 2: 
            return 'paper';
            break;
        case 3: 
            return 'scissors';
            break;
    }
}

function playRound (playerSelection, computerSelection) {
    if (computerSelection === 'rock') {
        
    }
}