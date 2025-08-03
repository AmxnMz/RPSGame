function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3) + 1;
    let finalChoice;

    if(compChoice === 1){
        finalChoice = "ROCK";
        return finalChoice;
    }
    if(compChoice === 2) {
        finalChoice = "PAPER";
        return finalChoice;
    }
    if(compChoice === 3) {
        finalChoice = "SCISSORS";
        return finalChoice;
    }
}

function getHumanChoice() {
    let initHumanChoice = window.prompt("Please select your move: Rock, Paper, or Scissors: ");
    let updatedHumanChoice = initHumanChoice.toUpperCase();
    let finalHumanChoice;

    if(updatedHumanChoice === "ROCK") {
        finalHumanChoice = "ROCK";
        return finalHumanChoice;
    }
    if(updatedHumanChoice === "PAPER") {
        finalHumanChoice = "PAPER";
        return finalHumanChoice;
    }
    if(updatedHumanChoice === "SCISSORS") {
        finalHumanChoice = "SCISSORS";
        return finalHumanChoice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
        if(humanChoice === "ROCK" && computerChoice === "SCISSORS") {
            humanScore++;
            console.log(`You Win! Score is ${humanScore}-${computerScore}`);
        }
        if(humanChoice === "ROCK" && computerChoice === "PAPER") {
            computerScore++;
            console.log(`You Lose! Score is ${humanScore}-${computerScore}`);
        }
        if(humanChoice === "PAPER" && computerChoice === "ROCK") {
            humanScore++;
            console.log(`You Win! Score is ${humanScore}-${computerScore}`);
        }
        if(humanChoice === "PAPER" && computerChoice === "SCISSORS") {
            computerScore++;
            console.log(`You Lose! Score is ${humanScore}-${computerScore}`);
        }
        if(humanChoice === "SCISSORS" && computerChoice === "PAPER") {
            humanScore++;
            console.log(`You Win! Score is ${humanScore}-${computerScore}`);
        }
        if(humanChoice === "SCISSORS" && computerChoice === "ROCK") {
            computerScore++;
            console.log(`You Lose! Score is ${humanScore}-${computerScore}`);
        }
        if(humanChoice === computerChoice){
            console.log(`It's a tie! Score is ${humanScore}-${computerScore}`)
        }
       
}

function playGame(n) {
    for(i = 0; i < n; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame(5);

if(humanScore > computerScore){
    console.log("Congrats! You Won!");
}
if(humanScore === computerScore){
    console.log("It's a tie!")
}
if(humanScore < computerScore) {
    console.log("Sorry! You Lose!");
}
