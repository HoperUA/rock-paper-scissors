const options = ["Paper", "Rock", "Scissors"];
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

const playerSelection = prompt("Choose Your Weapon");
const computerSelection = getComputerChoice();

function playRound (playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == "Rock" && computerSelection.toLowerCase() == "Scissors"){
        return "win";
    }else if (playerSelection.toLowerCase() == "Paper" && computerSelection.toLowerCase() == "Rock"){
        return "win";
    }else if (playerSelection.toLowerCase() == "Scissors" && computerSelection.toLowerCase() == "Paper"){
        return "win";
    }else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "tie";
    }else {
        return "loss";
    }
}
console.log(playerSelection.toLowerCase());
console.log(computerSelection.toLowerCase());
console.log(playRound(playerSelection, computerSelection));

//I need to mak the Game function with the loop of 5 rounds