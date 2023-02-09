//global variables list
const resultsMsg = document.querySelector('#results');
const score = document.querySelector('#playerScore');
const compScore = document.querySelector('#compScore');
const winnerMsg = document.querySelector('#winner');
let playerCounter = 0; 
let compCounter = 0;

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

//increment the score.
//update the displays.
//stop the game at 5 points & display winner message
function keepScore(result) {
  if (result === 'win') {
    playerCounter++;
    score.textContent = `Your score: ${playerCounter}`; 
    compScore.textContent = `Computer score: ${compCounter}`;
    
  } else if (result === 'lose') {
    compCounter++;
    score.textContent = `Your score: ${playerCounter}`; 
    compScore.textContent = `Computer score: ${compCounter}`;
    
  }
  
  if (playerCounter >= 5 || compCounter >= 5) {
    if (playerCounter >= 5) {
        winnerMsg.textContent = 'You win!';
    } else if (compCounter >= 5) {
        winnerMsg.textContent = 'wow...you lost to a computer';
    }
  }
  
}

//compare two values (a user selection and a computer selection)
//keepScore() with each round & update display
const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        resultsMsg.textContent = 'tie! No new points.';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            keepScore('lose');
            resultsMsg.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        } else if (computerSelection === 'scissors') {
            keepScore('win');
            resultsMsg.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            keepScore('lose');
            resultsMsg.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        } else if (computerSelection === 'rock') {
            keepScore('win');
            resultsMsg.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            keepScore('lose');
            resultsMsg.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        } else if (computerSelection === 'paper') {
            keepScore('win');
            resultsMsg.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    }
}

//put event listeners on the buttons.
//run playRound() when clicked to compare button value with computer choice
function playOnClick() {
    const btns = document.querySelectorAll("button");
    btns.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.className, getComputerChoice());
        });
    });
}

playOnClick();