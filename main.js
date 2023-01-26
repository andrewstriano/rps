function getComputerChoice() {
    randNum = Math.random() * 10;
    if (randNum <= 3.33) {
        computerChoice = "rock";
    }
    else if (randNum <=6.66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors"
    }
    return computerChoice;
};

let player = "rock"; 

function playRound(playerChoice, computerChoice) {
    computerChoice = getComputerChoice();
    playerChoice = player.toLowerCase();

    if (playerChoice === "rock" && computerChoice === "scissors") {
        roundResult = "Player Wins";   
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        roundResult = "Player Wins";
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        roundResult = "Player Wins";
    }
    else if (playerChoice === computerChoice) {
        roundResult = "Its a Tie"
    }
    else {
        roundResult = "Computer Wins"
    }
    return roundResult;
};

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound();
        if (playRound() === "Player Wins") {
            playerScore++;
        }
        else if (playRound() === "Its a Tie") {
            let string = `round ${i} is a tie`;
            console.log(string);
        }
        else {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        gameResult = "Player Wins Game";
    }
    else if (playerScore === computerScore) {
        gameResult = "Tie";
    }
    else {
        gameResult = "Computer Wins Game";
    }
    console.log(playerScore);
    console.log(computerScore);
    return gameResult;
}

console.log(game());