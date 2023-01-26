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
