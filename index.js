const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const playerAnswer = document.getElementById("playerAnswer");
const computerAnswer = document.getElementById("computerAnswer");
const results = document.getElementById("results");
const finalScore = document.getElementById("finalScore");
const resetButton = document.getElementById("resetButton");
resetButton.style.display = "none";
let gameOver = false;

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3) + 1;
    let finalChoice;

    if(compChoice === 1){
        finalChoice = "👊";
        computerAnswer.style.fontSize = "3rem";
        computerAnswer.textContent =  `Computer chose: ${finalChoice}`;
        return finalChoice;
    }
    if(compChoice === 2) {
        finalChoice = "✋";
        computerAnswer.style.fontSize = "3rem";
        computerAnswer.textContent = `Computer chose: ${finalChoice}`;
        return finalChoice;
    }
    if(compChoice === 3) {
        finalChoice = "✌️";
        computerAnswer.style.fontSize = "3rem";
        computerAnswer.textContent = `Computer chose: ${finalChoice}`;
        return finalChoice;
    }
}

function getHumanChoice() {
    rockButton.addEventListener("click", event => {
        playerAnswer.textContent = "You Chose: 👊";
        playerAnswer.style.fontSize = "3rem";
        const computerChoice = getComputerChoice();
        playRound("👊", computerChoice);
    });
    paperButton.addEventListener("click", event => {
        playerAnswer.textContent = "You Chose: ✋";
        playerAnswer.style.fontSize = "3rem";
        const computerChoice = getComputerChoice();
        playRound("✋", computerChoice);
    });
    scissorsButton.addEventListener("click", event => {
        playerAnswer.textContent = "You Chose: ✌️";
        playerAnswer.style.fontSize = "3rem";
        const computerChoice = getComputerChoice();
        playRound("✌️", computerChoice);
        
    });
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
        if(gameOver) return;
        
        if(humanChoice === "👊" && computerChoice === "✌️") {
            humanScore++;
            results.textContent = `You Win! Score is ${humanScore}-${computerScore}`;
        }
        if(humanChoice === "👊" && computerChoice === "✋") {
            computerScore++;
            results.textContent = `You Lose! Score is ${humanScore}-${computerScore}`;
        }
        if(humanChoice === "✋" && computerChoice === "👊") {
            humanScore++;
            results.textContent = `You Win! Score is ${humanScore}-${computerScore}`;
        }
        if(humanChoice === "✋" && computerChoice === "✌️") {
            computerScore++;
            results.textContent = `You Lose! Score is ${humanScore}-${computerScore}`;
        }
        if(humanChoice === "✌️" && computerChoice === "✋") {
            humanScore++;
            results.textContent = `You Win! Score is ${humanScore}-${computerScore}`;
        }
        if(humanChoice === "✌️" && computerChoice === "👊") {
            computerScore++;
            results.textContent = `You Lose! Score is ${humanScore}-${computerScore}`;
        }
        if(humanChoice === computerChoice){
            results.textContent = `It's a tie! Score is ${humanScore}-${computerScore}`;
        }

        if(humanScore === 5) {
            finalScore.textContent = "Player Won! Congrats🎉";
            gameOver = true;
            resetButton.style.display = "inline-block";
        }
        if(computerScore === 5){
            finalScore.textContent = "Computer won. You Lost🩻";
            gameOver = true;
            resetButton.style.display = "inline-block";
        }
        
       
}
resetButton.addEventListener("click", event => {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    playerAnswer.textContent = "";
    computerAnswer.textContent = "";
    results.textContent = "";
    finalScore.textContent = "";

    resetButton.style.display = "none";
});


getHumanChoice();




