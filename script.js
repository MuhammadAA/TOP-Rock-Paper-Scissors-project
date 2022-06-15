

function computerPlay () {      // Function to decide what the computer picks 
    let val = Math.floor(Math.random() * (3 - 1 +1) + 1); 
    
    let output;
    if (val == 1){
        output = "Rock";
    } else if (val == 2){
        output = "Paper";
    } else {
        output = "Scissors";
    }

    return output;
}


// Plays 1 round of the game with the computer (required user to input their selection before hand, as well as the result from the computerPlay function)
function playRound (playerSelection, computerSelection) {    

    // Ensures casing doesnt become an issue 
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    playerWins = false;

    let outcome;
        
    // Draw Situation
    if (playerSelection == computerSelection) {
        outcome = "Draw!";
    }
    
    // Computer Wins Situations
    else if (playerSelection == "rock" && computerSelection == "paper"){
        outcome = "Paper beats Rock. Computer Wins!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        outcome = "Scissors beats Paper. Computer Wins!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        outcome = "Rock beats Scissors. Computer Wins!";
    }

    // Player Wins Situations
    else if (computerSelection == "rock" && playerSelection == "paper"){
        outcome = "Paper beats Rock. Player Wins!";
        playerWins = true;
    }
    else if (computerSelection == "paper" && playerSelection == "scissors"){
        outcome = "Scissors beats Paper. Player Wins!";
        playerWins = true;
    }
    else if (computerSelection == "scissors" && playerSelection == "rock"){
        outcome = "Rock beats Scissors. Player Wins!";
        playerWins = true;
    }

    // Returns multiple values as an array so that its easier to receive the two return values
    return overall = [outcome, playerWins];
}



// Loops through the playRound function 5 times and keeps track of the number of times the computer or player wins and announces overall winner in the end
function game() {
    let computerWinCounter = 0;
    let playerWinCounter = 0;

    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Enter your pick: ");
        computerSelection = computerPlay();
        

        // Splitting multiple returns from playRound function
        overall = playRound(playerSelection,computerSelection);
        outcome = overall[0];
        playerWins = overall[1] 

        // Tells player who won the round
        alert(outcome);

        // Updates count for the winner of the round
        if (playerWins == false && outcome != "Draw!"){
            computerWinCounter += 1;
        }
        else if (playerWins == true) {
            playerWinCounter += 1;
        }
    }

    // Alerts in browser the winner from the total of 5 matches
    console.log("computer: " + computerWinCounter)
    console.log("player: " + playerWinCounter)
    if (computerWinCounter == playerWinCounter) {
        alert("Draw!")
    }
    else if (computerWinCounter > playerWinCounter) {
        alert("Computer Wins!")
    }
    else {
        alert("Player Wins!")
    }
}


// Running the game
game();