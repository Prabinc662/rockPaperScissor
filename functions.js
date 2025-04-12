function getComputerChoice() {
    randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 0) {
        return "Rock";
    } else if (randomNumber == 1) {
        return "Paper";
    } else if (randomNumber == 2) {
        return "Scissors";
    }
}

function getHumanChoice() {
    choice = prompt("Rock, Paper or Scissors", "Rock");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    // winner = "";
    if (humanChoice === "rock" && computerChoice === "Rock") {
        console.log("Draw!");
        winner = "None";
    } else if (humanChoice === "rock" && computerChoice === "Paper") {
        console.log("You lose! Paper beats Rock");
        winner = "Computer";
        // return computerScore =+ 1;
    } else if (humanChoice === "rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats Scissors");
        winner = "Human";
        // return humanScore =+ 1;
    } else if (humanChoice === "paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock");
        winner = "Human";
        // return humanScore =+ 1;
    } else if (humanChoice === "paper" && computerChoice === "Paper") {
        console.log("Draw!");
        winner = "None";
    } else if (humanChoice === "paper" && computerChoice === "Scissors") {
        console.log("You lose! Scissors beat Paper");
        winner = "Computer";
        // return computerScore =+ 1;
    } else if (humanChoice === "scissors" && computerChoice === "Rock") {
        console.log("You lose! Rock beats Scissors");
        winner = "Computer";
        // return computerScore =+ 1;
    } else if (humanChoice === "scissors" && computerChoice === "Paper") {
        console.log("You win! Scissors beats Paper");
        winner = "Human";
        // return humanScore =+ 1;
    } else if (humanChoice === "scissors" && computerChoice === "Scissors") {
        console.log("Draw!");
        winner = "None";
    }

    return winner;
}

function playGame() {
    i = 0
    while (i < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        
        if (winner == "Computer") {
            computerScore =+ 1;
        } else if (winner == "Human") {
            humanScore =+ 1;
        }
        console.log("Human Score = " + humanScore);
        console.log("Computer Score = " + computerScore);
        i++;
    }
}

playGame();