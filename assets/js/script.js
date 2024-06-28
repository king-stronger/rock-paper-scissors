let humanScore = 0, computerScore = 0, rounds = 0, commentaryText = "";

let hands = document.querySelectorAll(".hands");
let roundBox = document.querySelector(".rounds");
let commentaryBox = document.querySelector(".commentary");
let playerBoxScore = document.querySelector(".player-score .score");
let computerBoxScore = document.querySelector(".computer-score .score");

hands.forEach(hand => {
    hand.addEventListener("click", event => {
        let computerChoice = getComputerChoice();

        const targetButton = event.target.closest("button");

        if(targetButton){
            let humanChoice = targetButton.getAttribute("data-value");
    
            playRound(humanChoice, computerChoice);
        }
    });
})

function updateUi(){
    roundBox.innerText = rounds;
    playerBoxScore.innerText = humanScore;
    computerBoxScore.innerText = computerScore;
    commentaryBox.innerText = commentaryText;

    commentaryText = "";
}

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

    return "scissor";
}

function whoWon() {
    if(rounds === 5){
        if(humanScore > computerScore){
            commentaryText += "\nYou won the game " + humanScore + " - " + computerScore;
        } else if (humanScore < computerScore) {
            commentaryText += "\nYou lost the game " + humanScore + " - " + computerScore;
        } else {
            commentaryText += "\nYou draw the game " + humanScore + " - " + computerScore;
        }

        rounds = 0;
        humanScore = 0;
        computerScore = 0;
    }
}

function playRound(humanChoice, computerChoice){
    rounds++;

    if(
        (humanChoice === "rock" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "paper") ||
        (humanChoice === "scissor" && computerChoice === "scissor")
    ){
        commentaryText = "It's a draw ! You both choose the " + humanChoice;
        whoWon();
        return updateUi();
    }

    if(
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ){
        humanScore++;
        commentaryText = "You won the round ! The " + humanChoice + " beats the " + computerChoice;
        whoWon();
        return updateUi();
    }

    if(
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "rock")
    ){
        computerScore++;
        commentaryText = "You lost the round ! The " + humanChoice + " loses to the " + computerChoice;
        whoWon();
        return updateUi();
    }
}