const playRound = () => {

    const getComputerChoice = () => {
        let choices = ['rock', 'paper', 'scissors'];
        let index = Math.round(Math.random() * 2);
        return choices[index];
    }
    
    const playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
    const computerSelection = getComputerChoice();

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

  const game = () => {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 1; i < 6; i++) {
        let result = playRound();
        console.log(`game: ${i}, result: ${result}`)
        if (result.startsWith('You win!')) {
            userScore++;
        }
        if (result.startsWith('You lose!')) {
            computerScore++;
        }
    }
    if (userScore > computerScore) {
        return 'You win!';
    } else if (userScore > computerScore) {
        return 'Computer wins.'
    } else {
        return 'It\'s a tie!'
    }
  }
  
  console.log(game());