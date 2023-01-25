//get a random number.
//convert number to 'rock', 'paper' or 'scissors'.
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

//prompt player for an input. 
//Transform the input to lowercase.
function getPlayerChoice() {
    let input = prompt('Rock, Paper or Scissors?').toLowerCase();
    return input;
}

//initialize a counter.
//let counter;

//compare one computer generated val with one user-provided val
//problems: what return value do I need to keep a score in the next func?
function playRound (playerSelection, computerSelection) {
    console.log(`player chose: ${playerSelection}. Computer chose: ${computerSelection}.`);

    if (playerSelection === computerSelection) {
        console.log('tie! no new points');
        return 'tie';
    } else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            console.log('You win! Paper beats rock.');
            return 'win';
        } else if (playerSelection === 'scissors') {
            console.log('You lose! Rock beats Scissors.')
            return 'lose';
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            console.log('You lose! Paper beats rock.');
            return 'lose';
        } else if (playerSelection === 'scissors') {
            console.log('You win! Scissors beat paper.');
            return 'win';
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock')  {
            console.log('You win! Rock beats scissors.');
            return 'win';
        } else if (playerSelection === 'paper') {
            console.log('You lose! Scissors beat paper.');
            return 'lose';
        }
    }
}



//playRound repeated 5 times. We tally the score.
function game (output) {
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
    return counter;
}

game();

