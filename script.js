function getComputerChoice() {
    const Choice = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return Choice[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelectionLower = playerSelection.toLowerCase();
    
    if (
        playerSelection !== "Rock" &&
        playerSelection !== "Paper" &&
        playerSelection !== "Scissors"
    ) {
        return "Invalid selection. Please choose Rock, Paper, or Scissors.";
    }

    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie"
    } else if (
        (playerSelectionLower === "rock" && computerSelection.toLowerCase() === "scissors") ||
        (playerSelectionLower === "paper" && computerSelection.toLowerCase() === "rock")||
        (playerSelectionLower === "paper" && computerSelection.toLowerCase() === "paper") 
    ) {
        return " You win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
            return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++){
        const playerSelection = prompt("round" + round + ": Enter your choice(Rock, Paper, Scissors):");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if(result.includes("lose")) {
            computerScore++;
        }

        console.log("Game over");
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);

        if (playerScore > computerScore) {
            console.log("Congratulations! You win the game");
        } else if (playerScore < computerScore) {
            console.log("Oops! You lose the game!");
        } else {
            return "It's a tie! The game ends in a draw!"
        }
    }
}
// Start the game
game();
