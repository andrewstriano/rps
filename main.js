const wL = document.querySelector("#winOrLose"); // assigns the win or lose paragraph to a constant
const pS = document.querySelector("#playScore"); // creates the player score variable
const cS = document.querySelector("#compScore");// creates Computer score variable.
const gR = document.querySelector("#gameResults");
const play = document.querySelector("#play"); // play button variable.
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
let playerScore = 0;
let computerScore = 0;
let i = 0; // round count.
let computerChoice;
let playerChoice;
let round;

play.addEventListener("click", () => {
    rockButton.addEventListener("click", (clickedId) => {
    clickedId = "Rock";
    playGame(clickedId);
})
paperButton.addEventListener("click", (clickedId) => {
    clickedId = "Paper";
    playGame(clickedId);
})
scissorsButton.addEventListener("click", (clickedId) => {
    clickedId = "Scissors";
    playGame(clickedId);
})});

// function startGame() {
//     rockButton.addEventListener("click", (clickedId) => {
//         clickedId = "Rock";
//         playGame(clickedId);
//     })
//     paperButton.addEventListener("click", (clickedId) => {
//         clickedId = "Paper";
//         playGame(clickedId);
//     })
//     scissorsButton.addEventListener("click", (clickedId) => {
//         clickedId = "Scissors";
//         playGame(clickedId);
//     })
// }

function getComputerChoice() { // gets a random play from the computer.
    switch (Math.floor(Math.random() * 3) + 1) {
        case (1): {return "Rock"};
        case (2): {return "Paper"};
        case (3): {return "Scissors"};
    };
}; 
function playRound() {
    if (playerChoice === "Rock"){
        if (computerChoice === "Rock"){
            round = "Draw";
        } else if (computerChoice === "Paper"){
            round = "Computer Wins Round";
        } else if (computerChoice === "Scissors"){
            round = "Player Wins Round";
        } 

}

else if (playerChoice === "Paper"){
        if (computerChoice === "Rock"){
        round = "Player Wins Round";
    } else if (computerChoice === "Paper"){
        round = "Draw";
    } else if (computerChoice === "Scissors"){
        round = "Computer Wins Round";
    } 
}

else if (playerChoice === "Scissors"){
        if (computerChoice === "Rock"){
        round = "Computer Wins Round";
    } else if (computerChoice === "Paper"){
        round = "Player Wins Round";
    } else if (computerChoice === "Scissors"){
        round = "Draw";   
    } 
}
};
function endGame() {
    rockButton.removeEventListener("click", (clickedId) => {
        clickedId = "Rock";
        playGame(clickedId);
    })
    paperButton.removeEventListener("click", (clickedId) => {
        clickedId = "Paper";
        playGame(clickedId);
    })
    scissorsButton.removeEventListener("click", (clickedId) => {
        clickedId = "Scissors";
        playGame(clickedId);
    })
    playerScore = 0;
    computerScore = 0;
    i = 0;
    wL.textContent = "";
}


function playGame(clickedId) {
   computerChoice = getComputerChoice();
   playerChoice = clickedId;
    if(playerScore === 4 && computerScore < 4){
        playRound();
        switch (round) {
            case ("Computer Wins Round"):{
                computerScore++
            }
            case ("Player Wins Round"): {
                playerScore++
                gR.textContent = "Player Wins Game"
                endGame();
            }
        }
    } else if ( computerScore === 4 && playerScore < 4){
        playRound();
        switch (round) {
            case ("Computer Wins Round"):{
                computerScore++
                gR.textContent = "Computer Wins Game"
                endGame();
            }
            case ("Player Wins Round"): {
                playerScore++
            }
        }
    } else if (playerScore === 4 && computerScore === 4){

    }
    
    else {
        playRound();
        switch (round){
            case ("Computer Wins Round"): {
                computerScore++ ;
                
            };
            case ("Player Wins Round"): {
                playerScore++;
                
            };
        }
    }
   i++
   console.log(playerChoice, "PC");
   console.log(computerChoice, "CC");
   console.log(playerScore, "PS");
   console.log(computerScore, "CS");
   console.log(i, "i");
   console.log(round, "round");

   wL.textContent = `${round} ${i} Computer Score: ${computerScore} Player Score ${playerScore}`;
}



// known bugs:

// wont stop game after score reaches 5
