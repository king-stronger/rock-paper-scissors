# Rock-Paper-Scissors Game

This is a simple implementation of the classic Rock-Paper-Scissors game in JavaScript, where a human player competes against the computer.

## How to Play

The game consists of 5 rounds. In each round, the human player is prompted to choose between rock, paper, or scissors. The computer also makes its choice randomly. The winner of each round is determined based on the standard rules of Rock-Paper-Scissors:

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

At the end of the 5 rounds, the scores are displayed to determine the overall winner.

## Code Explanation

### Variables

- `humanScore`: Keeps track of the human player's score.
- `computerScore`: Keeps track of the computer's score.

### Functions

#### `getRandomNumber()`
Generates a random number between 1 and 100.

#### `getComputerChoice()`
Uses `getRandomNumber()` to randomly select and return "rock", "paper", or "scissors".

#### `getHumanChoice()`
Prompts the human player to enter their choice of "rock", "paper", or "scissors". The input is converted to lowercase to ensure consistency.

#### `playRound(humanChoice, computerChoice)`
Determines the winner of a single round based on the human and computer choices. It updates the scores and logs the result of the round.

#### `playGame()`
The main function that runs the game for 5 rounds. It logs the starting message, collects choices from both the human and the computer for each round, and calls `playRound()` to determine the outcome.

### Execution

The game starts by calling `playGame()`.

## Example Output

```plaintext
Choose rock, paper or scissors: rock
You win! The rock beats the scissors
You: 1 - Computer: 0
Choose rock, paper or scissors: paper
You lose! The rock beats the paper
You: 1 - Computer: 1
...
```

## How to Run

1. Copy the code into a JavaScript file (e.g., `rockPaperScissors.js`).
2. Create an HTML file and link the javascript file.
2. Run the html file in your browser.

