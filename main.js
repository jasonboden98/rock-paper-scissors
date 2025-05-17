//Making a Rock Paper scissors game using javascript & outputting to the console
//create a function that has the computer randomly generate one of three strings being rock paper or scissors & stores that string in a variable

function getComputersChoice(computerChoice = 3) {
    return Math.floor(Math.random() * max) + 1;
}
let max = getComputersChoice();
console.log(computerChoice);
//prompt the user to enter in one of the three strings and store that inside another variable
function getPlayersChoice(userChoice = prompt("Choose Rock, Paper, or Scissors: ")) {
    
}
//play the round & return the result of the round, weather or not the player one or lost the round
//track the score of the game using a human & computer score variable with the value starting at 0
