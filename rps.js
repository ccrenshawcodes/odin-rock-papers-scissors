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


const results = document.querySelector('#results');
const score = document.querySelector('#score');

//compare one computer generated val with one user-provided val
function playRound (playerSelection, computerSelection) {
    console.log(`player chose: ${playerSelection}. Computer chose: ${computerSelection}.`);

    if (playerSelection === computerSelection) {
        results.textContent = 'tie! No new points.';
        return 'tie';
    } else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            results.textContent = 'You win! Paper beats rock.';
            return 'win';
        } else if (playerSelection === 'scissors') {
            results.textContent = 'You lose! Rock beats scissors.';
            return 'lose';
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            results.textContent = 'You lose! Paper beats rock.'
            return 'lose';
        } else if (playerSelection === 'scissors') {
            results.textContent = 'You win! Scissors beat paper.';
            return 'win';
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock')  {
            results.textContent = 'You win! Rock beats scissors.';
            return 'win';
        } else if (playerSelection === 'paper') {
            results.textContent = 'You lose! Scissors beat paper.';
            return 'lose';
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

