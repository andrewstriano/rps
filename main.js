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
    console.log(playerChoice);
    console.log(computerChoice);
    console.log(roundResult);
};
playRound();
