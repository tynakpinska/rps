const getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let index = Math.round(Math.random() * 2);
    return choices[index];
}

const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats rock.';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors.';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beat paper.';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock.';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beat paper.';
    }
    else {
        return 'You lose! Rock beats scissors.';
    }
  }
   
  const playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));