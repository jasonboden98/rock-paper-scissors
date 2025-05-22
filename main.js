//Making a Rock Paper scissors game using javascript & outputting to the console
//create a function that has the computer randomly generate one of three strings being rock paper or scissors & stores that string in a variable
function getComputersChoice(computerChoice = 3) {
    return Math.floor(Math.random() * computerChoice) + 1;
}
let computerChoice = getComputersChoice();
// console.log(computerChoice);

let result = " ";
if (computerChoice == 1) {
    result = "Rock"
}
else if (computerChoice == 2) {
    result = "Paper"
}
else if (computerChoice == 3) {
    result = "Scissors"
}
// console.log("The computer chose " + result);

//prompt the user to enter in one of the three strings and store that inside another variable
function getPlayersChoice(userChoice = prompt("Choose Rock, Paper, or Scissors: ")) {
    return userChoice;
}
let userChoice = getPlayersChoice();
// console.log("You chose " + userChoice);

//declate the players score variables
//two variables names humanScore & computerScore, initialize the variables with the value of 0
const humanScore = 0;
let computerScore = 0;

//write the logic to play a single round, create a function called playRound
//write logic to play the entire game