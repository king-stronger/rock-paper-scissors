let humanScore = 0, computerScore = 0;

function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

function getComputerChoice(){
    let randomNumber = getRandomNumber();
    
    if(randomNumber <= 33){
        return "rock";
    }

    if(randomNumber > 33 && randomNumber <= 66){
        return "paper";
    }

    return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Choose rock, paper or scissors").toLowerCase();

    return choice;
}

function playRound(humanChoice, computerChoice){
    if(
        (humanChoice === "rock" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "scissors")
    ){
        console.log("It's a draw !")
        return console.log("You : " + humanScore + " - Computer : " + computerScore);
    }

    if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        console.log("You win ! The " + humanChoice + " beats the " + computerChoice);
        return console.log("You : " + humanScore + " - Computer : " + computerScore);
    }

    if(
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ){
        computerScore++;
        console.log("You lose ! The " + computerChoice + " beats the " + humanChoice);
        return console.log("You : " + humanScore + " - Computer : " + computerScore);
    }
}

function playGame(){
    console.log("Bisou")
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}

playGame();