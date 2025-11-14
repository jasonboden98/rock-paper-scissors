//logic for creating the computers choice 
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const computerChoice = getComputerChoice();
console.log(computerChoice);

let humanChoice;
function getHumanChoice() {
    humanChoice = prompt("Please enter rock, paper, or scissors: ");
    
}

getHumanChoice();
console.log(humanChoice);

function playGame(getComputerChoice, getHumanChoice) {
let humanScore = 0;
let computerScore = 0;
if (computerChoice == "rock" && humanChoice == "rock" || computerChoice == "paper" && humanChoice == "paper" || computerChoice == "scissors" && humanChoice == "scissors") {
    alert("tie")
}
else if (computerChoice == "rock" && humanChoice == "paper" || computerChoice == "paper" && humanChoice == "scissors" || computerChoice == "scissors" && humanChoice == "rock") {
    alert("You Win!")
    humanScore = humanScore+1;
}
else if (humanChoice == "rock" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "rock") {
    alert("You Lost!")
    computerScore = computerScore+1;
}
if (humanScore == 5) {
    alert("You won the game!")
    return
}
else if (computerScore == 5) {
    alert("You lost the game!")
    return
}
}
