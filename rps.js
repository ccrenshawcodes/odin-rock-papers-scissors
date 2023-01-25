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
let counter;

//compare one computer generated val with one user-provided val
//problems: what return value do I need to keep a score in the next func?
function playRound (playerSelection, computerSelection) {
    console.log(`player chose: ${playerSelection}. Computer chose: ${computerSelection}.`);

    if (playerSelection === computerSelection) {
        console.log('tie! no new points');
    } else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            console.log('You win! Paper beats rock.');
            //return counter++;
            return 'win';
        } else if (playerSelection === 'scissors') {
            console.log('You lose! Rock beats Scissors.')
            //return counter--;
            return 'lose';
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            console.log('You lose! Paper beats rock.');
            //return counter--;
            return 'lose';
        } else if (playerSelection === 'scissors') {
            console.log('You win! Scissors beat paper.');
            //return counter++;
            return 'win';
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock')  {
            console.log('You win! Rock beats scissors.');
            //return counter++;
            return 'win';
        } else if (playerSelection === 'paper') {
            console.log('You lose! Scissors beat paper.');
            //return counter--;
            return 'lose';
        }
    }
    //return counter;
}



//playRound repeated 5 times. We tally the score.
//problems: not counting like we want to
function game () {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
    if(round == 'win') {
        console.log('nice job');
    } else {
        console.log('better luck next time');
    }
    //need to increment the counter here I think
}

game();

