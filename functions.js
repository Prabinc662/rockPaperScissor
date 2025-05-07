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

function getHumanChoice(button) {
    return button;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "Rock") {
        winner = "None";
    } else if (humanChoice === "rock" && computerChoice === "Paper") {
        winner = "Computer";
    } else if (humanChoice === "rock" && computerChoice === "Scissors") {
        winner = "Human";
    } else if (humanChoice === "paper" && computerChoice === "Rock") {
        winner = "Human";
    } else if (humanChoice === "paper" && computerChoice === "Paper") {
        winner = "None";
    } else if (humanChoice === "paper" && computerChoice === "Scissors") {
        winner = "Computer";
    } else if (humanChoice === "scissors" && computerChoice === "Rock") {
        winner = "Computer";
    } else if (humanChoice === "scissors" && computerChoice === "Paper") {
        winner = "Human";
    } else if (humanChoice === "scissors" && computerChoice === "Scissors") {
        winner = "None";
    }

    return winner;
}

var humanScore = 0;
var computerScore = 0;

const btns = document.querySelectorAll("button");

btns.forEach((button) => {
    button.addEventListener("click", function (e) {
        value = e.target.id;
        let humanChoice = getHumanChoice(value);
        let computerChoice = getComputerChoice();

        const btnContainer = document.querySelector(".buttons");

        const hChoice = document.createElement("div");
        hChoice.classList.add("hchoice");
        hChoice.textContent = `You chose ${humanChoice}`;
        btnContainer.appendChild(hChoice);

        const cChoice = document.createElement("div");
        cChoice.classList.add("cChoice");
        cChoice.textContent = `Computer chose ${computerChoice}`;
        btnContainer.appendChild(cChoice);

        winner = playRound(humanChoice, computerChoice);

        if (winner == "Human") {
            humanScore += 1;
        } else if (winner == "Computer") {
            computerScore += 1;
        }

        const result= document.createElement("div");
        result.classList.add("result");
        result.textContent = `The round goes to ${winner}`;

        btnContainer.appendChild(result);

        const hscore = document.createElement("div");
        hscore.classList.add("hscore");
        hscore.textContent = `Human Score = ${humanScore}`;

        btnContainer.appendChild(hscore);
        
        const cScore = document.createElement("div");
        cScore.classList.add("cscore");
        cScore.textContent = `Computer Score = ${computerScore}`;

        btnContainer.appendChild(cScore);

        if (humanScore === 5) {
            finalWinner = "Human";
        } else if (computerScore === 5) {
            finalWinner = "Computer";
        }

        const fWinner = document.createElement("div");
        fWinner.classList.add("fwinner");
        fWinner.textContent = `The final winner is ${finalWinner}`

        btnContainer.appendChild(fWinner);
    });    
});
    


