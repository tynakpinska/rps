const body = document.querySelector("body");
const div = document.createElement("div");
body.appendChild(div);

let userScore = 0;
let computerScore = 0;
let gameResult;
let roundResult = "";

const playRound = e => {
  const getComputerChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    let index = Math.round(Math.random() * 2);
    return choices[index];
  };
  const playerSelection = e.target.textContent;
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    roundResult = "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    roundResult = "You lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    roundResult = "You win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    roundResult = "You lose! Scissors beat paper.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    roundResult = "You win! Paper beats rock.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    roundResult = "You win! Scissors beat paper.";
  } else {
    roundResult = "You lose! Rock beats scissors.";
  }

  if (roundResult.startsWith("You win!")) {
    userScore++;
  }
  if (roundResult.startsWith("You lose!")) {
    computerScore++;
  }
  if (userScore === 5 || computerScore === 5) {
    if (userScore > computerScore) {
      gameResult = "You win!";
    } else if (userScore < computerScore) {
      gameResult = "Computer wins.";
    } else {
      gameResult = "It's a tie!";
    }
    buttons.forEach(b => b.remove());
  }

  div.textContent = `Round result: ${roundResult}
User total score: ${userScore}.
Computer total score: ${computerScore}.
Game result: ${gameResult || "Keep playing"}`;
};

const game = () => {
  let userScore = 0;
  let computerScore = 0;

  if (userScore > computerScore) {
    return "You win!";
  } else if (userScore > computerScore) {
    return "Computer wins.";
  } else {
    return "It's a tie!";
  }
};

const createButton = choice => {
  let button = document.createElement("button");
  button.textContent = choice;
  button.style.padding = "10px";
  button.style.margin = "10px";
  body.appendChild(button);
};

createButton("rock");
createButton("paper");
createButton("scissors");

const buttons = document.querySelectorAll("button");
buttons.forEach(b => {
  b.addEventListener("click", playRound);
});
