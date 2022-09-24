// Declarations

const rockBtn = document.querySelector("#r");
const paperBtn = document.querySelector("#p");
const scissorBtn = document.querySelector("#s");
const userStat = document.querySelector("#result-user-stat");
const compStat = document.querySelector("#result-comp-stat");
const resultStat = document.querySelector("#result-final-stat");

const userScoreVal = document.querySelector("#userScoreVal");
let userScore = 0;
const compScoreVal = document.querySelector("#compScoreVal");
let compScore = 0;

let userChoice;
let compChoice;

const choices = ["r", "p", "s"];

function randomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function compute() {
  if (userChoice === "r") {
    userStat.innerText = "User: Rock";
    if (compChoice === "r") {
      userScoreVal.innerText = userScore;
      compScoreVal.innerText = compScore;
      compStat.innerText = "Computer: Rock";
      resultStat.innerText = "Winner: It's a Draw...";
      return console.log("It's a Draw :|");
    } else if (compChoice === "p") {
      compScore++;
      userScoreVal.innerText = userScore;
      compScoreVal.innerText = compScore;
      compStat.innerText = "Computer: Paper";
      resultStat.innerText = "Winner: Computer won :(";
      return console.log("Computer won :(");
    } else if (compChoice === "s") {
      userScore++;
      userScoreVal.innerText = userScore;
      compScoreVal.innerText = compScore;
      compStat.innerText = "Computer: Scissor";
      resultStat.innerText = "Winner: User won :)";
      return console.log("You won! :)");
    }
  } else if (userChoice === "p") {
    userStat.innerText = "User: Paper";

    if (compChoice === "p") {
      userScoreVal.innerText = userScore;
      compScoreVal.innerText = compScore;
      compStat.innerText = "Computer: Paper";
      resultStat.innerText = "Winner: It's a Draw...";
      return console.log("It's a Draw :|");
    } else if (compChoice === "s") {
      compScore++;
      userScoreVal.innerText = userScore;
      compScoreVal.innerText = compScore;
      compStat.innerText = "Computer: Scissor";
      resultStat.innerText = "Winner: Computer won :(";
      return console.log("Computer won :(");
    } else if (compChoice === "r") {
      userScore++;
      userScoreVal.innerText = userScore;
      compScoreVal.innerText = compScore;
      compStat.innerText = "Computer: Rock";
      resultStat.innerText = "Winner: User won :)";
      return console.log("You won! :)");
    }
  } else if (userChoice === "s") {
    userStat.innerText = "User: Scissor";

    if (compChoice === "s") {
      userScoreVal.innerText = userScore;
      compScoreVal.innerText = compScore;
      compStat.innerText = "Computer: Scissor";
      resultStat.innerText = "Winner: It's a Draw...";
      return console.log("It's a Draw :|");
    } else if (compChoice === "r") {
      compScore++;
      userScoreVal.innerText = userScore;
      compScoreVal.innerText = compScore;
      compStat.innerText = "Computer: Rock";
      resultStat.innerText = "Winner: Computer won :(";
      return console.log("Computer won :(");
    } else if (compChoice === "p") {
      userScore++;
      userScoreVal.innerText = userScore;
      compScoreVal.innerText = compScore;
      compStat.innerText = "Computer: Paper";
      resultStat.innerText = "Winner: User won :)";
      return console.log("You won! :)");
    }
  }
}

// EVENT LISTENERS

rockBtn.addEventListener("click", () => {
  userChoice = "r";
  compChoice = randomChoice();
  console.log(compChoice);
  compute();
});
paperBtn.addEventListener("click", () => {
  userChoice = "p";
  compChoice = randomChoice();
  console.log(compChoice);
  compute();
});
scissorBtn.addEventListener("click", () => {
  userChoice = "s";
  compChoice = randomChoice();
  console.log(compChoice);
  compute();
});
