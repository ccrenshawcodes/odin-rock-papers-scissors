//get a random number.
//assign number to string value.
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

//global variables list
const results = document.querySelector('#results');
const score = document.querySelector('#playerScore');
const compScore = document.querySelector('#compScore');
const winner = document.querySelector('#winner');
let playerCounter = 0; 
let compCounter = 0;


//compare one user generated val with the user inputted val
//perform a specific function on win or lose
//end the game after someone reaches 5 points.
const playRound = (playerSelection, computerSelection) => {
    console.log(`player chose: ${playerSelection}. Computer chose: ${computerSelection}.`);

    function playerLose() {
        compCounter++;
        score.textContent = `Your score: ${playerCounter}`; 
        compScore.textContent = `Computer score: ${compCounter}`;
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    function playerWin() {
        playerCounter++;
        score.textContent = `Your score: ${playerCounter}`; 
        compScore.textContent = `Computer score: ${compCounter}`;
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    }

    if (playerCounter < 5 && compCounter < 5) {
        if (playerSelection === computerSelection) {
            results.textContent = 'tie! No new points.';
        } else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                playerLose();
            } else if (computerSelection === 'scissors') {
                playerWin();
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                playerLose();
            } else if (computerSelection === 'rock') {
                playerWin();
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                playerLose();
            } else if (computerSelection === 'paper') {
                playerWin();
            }
        }
        } else if (playerCounter >= 5 || compCounter >= 5) {
            if (playerCounter >= 5) {
                winner.textContent = 'You win!';
            } else if (compCounter >= 5) {
                winner.textContent = 'wow...you lost to a computer';
            }
    }
}

//put event listeners on the buttons.
//run playRound when clicked to compare button value with computer choice
function playOnClick() {
    const btns = document.querySelectorAll("button");
    btns.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.className, getComputerChoice());
        });
    });
}

playOnClick();