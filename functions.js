function getComputerChoice() {
    randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 0) {
        return "Rock";
    } else if (randomNumber == 1) {
        return "Paper";
    } else if (randomNumber == 2) {
        return "Scissor";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    choice = prompt("Select your option.");
    return choice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice == 0 & computerChoice == 0) {
//         console.log("Draw!");
//     } else if (humanChoice == 1 & computerChoice == 1) {
//         console.log("Draw!");
//     } else if (humanChoice == 2 & computerChoice == 2) {
//         console.log("Draw!");
//     } else if (humanChoice == 0 & computerChoice == 1) {
//         console.log("Computer wins");
//     } else if (humanChoice == 1 & computerChoice == 2) {
//         console.log("Computer wins");
//     } else if (humanChoice == 2 & computerChoice == 0) {
//         console.log("Computer wins");
//     } else if (humanChoice == )

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);