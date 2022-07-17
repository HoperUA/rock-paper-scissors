let playerSelection;
let computerSelection;
const playerScore = 0;
const computerScore = 0;


const options = ["paper", "rock", "scissors"];
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}


const playRound = function(playerSelection, computerSelection) {
    playerSelection = prompt("Choose Your Weapon");
    computerSelection = getComputerChoice();
    console.log(playerSelection.toLowerCase());
    console.log(computerSelection);
    playerSelection = playerSelection.toLowerCase();

        if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")){
            console.log(`You win, ${playerSelection} beats ${computerSelection}`);
            return "win";

        }else if ((playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")){
            console.log(`You lost, ${computerSelection} beats ${playerSelection}!`);
            return "win";

        }else if (playerSelection == computerSelection){
            console.log(`You both choose ${computerSelection}, it's a tie!`);
            return "tie";

        }else {
            console.log("Error, try again");
            return playRound();
        }   
}











//console.log(playerSelection.toLowerCase());
//I need to make the Game function with the loop of 5 rounds

