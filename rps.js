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

//compare one computer generated val with one user-provided val
function playRound (playerSelection, computerSelection) {
    console.log(`player chose: ${playerSelection}. Computer chose: ${computerSelection}.`);

    if (playerSelection === computerSelection) {
        console.log('tie! no new points');
        results.textContent = 'tie! No new points.';
        return 'tie';
    } else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            console.log('You win! Paper beats rock.');
            results.textContent = 'You win! Paper beats rock.';
            return 'win';
        } else if (playerSelection === 'scissors') {
            console.log('You lose! Rock beats Scissors.')
            results.textContent = 'You lose! Rock beats scissors.';
            return 'lose';
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            console.log('You lose! Paper beats rock.');
            return 'lose';
        } else if (playerSelection === 'scissors') {
            console.log('You win! Scissors beat paper.');
            results.textContent = 'You win! Scissors beat paper.';
            return 'win';
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock')  {
            console.log('You win! Rock beats scissors.');
            results.textContent = 'You win! Rock beats scissors.';
            return 'win';
        } else if (playerSelection === 'paper') {
            console.log('You lose! Scissors beat paper.');
            results.textContent = 'You lose! Scissors beat paper.';
            return 'lose';
        }
    }
    if (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') {
        console.log('please enter a valid input or check your spelling.');
    }
}

//put event listeners on the buttons.
//event listener should run the playround() function when clicked.
const btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.className, getComputerChoice());
    });
});


//playRound repeated 5 times. Tally the score.
/*function game (output) {
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        output = playRound(getPlayerChoice(), getComputerChoice());
        if (output === 'win') {
            counter++;
        } else if (output === 'lose') {
            counter--;
        }
    }
    console.log(counter);
    //return counter;
}

game();*/

