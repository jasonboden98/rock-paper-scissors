//Making a Rock Paper scissors game using javascript & outputting to the console
//create a function that has the computer randomly generate one of three strings being rock paper or scissors & stores that string in a variable

function getComputersChoice(computerChoice = 3) {
    return Math.floor(Math.random() * computerChoice) + 1;
}
let computerChoice = getComputersChoice();
console.log(computerChoice);

//prompt the user to enter in one of the three strings and store that inside another variable

function getPlayersChoice(userChoice = prompt("Choose Rock, Paper, or Scissors: ")) {
    return userChoice;
}
let userChoice = getPlayersChoice();
console.log(userChoice);

//declate the players score variables
//two variables names humanScore & computerScore, initialize the variables with the value of 0
//write the logic to play a single round, create a function called playRound
//write logic to play the entire game