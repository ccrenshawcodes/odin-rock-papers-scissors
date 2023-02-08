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

//global variables list!
const results = document.querySelector('#results');
const score = document.querySelector('#playerScore');
const compScore = document.querySelector('#compScore');
const winner = document.querySelector('#winner');
let playerCounter = 0; 
let compCounter = 0;


function playerLose() {
    playerCounter > 0 ? playerCounter-- : playerCounter = 0;
    compCounter++;
    score.textContent = `Your score: ${playerCounter}`; 
    compScore.textContent = `Computer score: ${compCounter}`;
    
}

function playerWin() {
    playerCounter++;
    compCounter > 0 ? compCounter-- : compCounter = 0;
    score.textContent = `Your score: ${playerCounter}`; 
    compScore.textContent = `Computer score: ${compCounter}`;
    
}


//compare one user generated val with the user inputted val
const playRound = (playerSelection, computerSelection) => {
    console.log(`player chose: ${playerSelection}. Computer chose: ${computerSelection}.`);

    if (playerSelection === computerSelection) {
        results.textContent = 'tie! No new points.';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            playerLose();
            results.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        } else if (computerSelection === 'scissors') {
            playerWin();
            results.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            playerLose();
            results.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        } else if (computerSelection === 'rock') {
            playerWin();
            results.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            playerLose();
            results.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        } else if (computerSelection === 'paper') {
            playerWin();
            results.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
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

//playRound repeated until player or computer gets 5 points.
function playToFive() {
    if (playerCounter < 5 && compCounter < 5) {
        playOnClick();
    } else if (playerCounter >=5 || compCounter >= 5) {
        //document.removeChild('button');
        if (playerCounter >= 5) {
            winner.textContent = 'You win!';
        } else if (compCounter >= 5) {
            winner.textContent = 'wow.... you lost to a computer';
        }
    }
    
}

playToFive();



//figure out how to end the game.