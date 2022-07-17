let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const options = ["paper", "rock", "scissors"];

wannaPlay()

function getPlayersChoice(){
    let input = prompt('Choose Your Weapon (Type "Rock", "Paper", or "Scissors"');
    if (input === null){
        console.log("Game is Aborted");
            return alert("Good Bye");
    }else {
        return input;
    }
   
}

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}   

function playRound(playerSelection, computerSelection) {

    playerSelection = getPlayersChoice();
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
   

        if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")){
            alert(`You win, ${playerSelection} beats ${computerSelection}`);
            return playerScore += 1;

        }else if ((playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")){
            alert(`You lost, ${computerSelection} beats ${playerSelection}!`);
            return computerScore += 1;

        }else if (playerSelection == computerSelection){
           alert(`You both choose ${computerSelection}, it's a tie!`);
            return playRound();

        }else if (playerSelection === null){
           return alert("Good Bye");

        }else {
            alert("Error, try again");
            return playRound();  
        }    
    }

function game(){


    for (let i = 0; i < 5; i++) {
        playRound();
        alert(`Player: ${playerScore}; Computer: ${computerScore}`);
     }
     alert(playerScore > computerScore ? "Congratulations, you won the game!" : "Sorry, you lost the game!")
}     

function wannaPlay(){
    let isRestart = confirm("Do you want to play?");
    if (isRestart){
        return game();
    }else {
        alert("Game is Aborted");
        alert("Good Bye");
    }
    }






//console.log(playerSelection.toLowerCase());
//I need to make the Game function with the loop of 5 rounds

